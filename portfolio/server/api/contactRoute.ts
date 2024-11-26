import { contactController } from './contactController';
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'POST') {
    return contactController(req, res); 
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
