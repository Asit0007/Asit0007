import { VercelRequest, VercelResponse } from '@vercel/node';
import mongoose from 'mongoose';

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
    const count = await View.countDocuments();
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="20">
        <rect width="120" height="20" fill="#0A66C2"/>
        <text x="60" y="14" fill="#fff" font-family="Arial" font-size="12" text-anchor="middle">Views: ${count}</text>
      </svg>
    `;
    res.setHeader('Content-Type', 'image/svg+xml');
    res.status(200).send(svg);
  } catch (error) {
    console.error('Error in badge:', error);
    res.status(500).send('Internal Server Error');
  }
};