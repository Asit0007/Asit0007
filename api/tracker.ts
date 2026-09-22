import { VercelRequest, VercelResponse } from '@vercel/node';
import mongoose from 'mongoose';
import crypto from 'crypto';

const uri = process.env.MONGODB_URI!;
let cachedDb: typeof mongoose | null = null;

async function connectToDatabase() {
  if (cachedDb) return cachedDb;
  const client = await mongoose.connect(uri);
  cachedDb = client;
  return client;
}

const viewSchema = new mongoose.Schema({
  ipHash: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const View = mongoose.models.View || mongoose.model('View', viewSchema);

function getClientIp(req: VercelRequest): string {
  const forwardedFor = req.headers['x-forwarded-for'];
  const raw = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor;
  // x-forwarded-for is "client, proxy1, proxy2, ..." — only the first hop is the real client.
  // Hashing the whole header made the hash change between requests as intermediate hops varied.
  if (raw) return raw.split(',')[0].trim();
  return req.socket.remoteAddress || '';
}

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    await connectToDatabase();
    const viewerIP = getClientIp(req);
    const viewerHash = crypto.createHash('sha256').update(viewerIP).digest('hex');

    await View.findOneAndUpdate(
      { ipHash: viewerHash },
      { $setOnInsert: { ipHash: viewerHash, createdAt: new Date() } },
      { upsert: true }
    );

    const img = Buffer.from('R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==', 'base64');
    res.setHeader('Content-Type', 'image/gif');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).end(img);
  } catch (error) {
    console.error('Error in tracker:', error);
    res.status(500).send('Internal Server Error');
  }
};