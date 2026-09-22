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

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    await connectToDatabase();
    const viewerIP = req.headers['x-forwarded-for']?.toString() || req.socket.remoteAddress || '';
    const viewerHash = crypto.createHash('sha256').update(viewerIP).digest('hex');

    if (!(await View.findOne({ ipHash: viewerHash }))) {
      await View.create({ ipHash: viewerHash });
    }

    const img = Buffer.from('R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==', 'base64');
    res.setHeader('Content-Type', 'image/gif');
    res.status(200).end(img);
  } catch (error) {
    console.error('Error in tracker:', error);
    res.status(500).send('Internal Server Error');
  }
};