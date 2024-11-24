import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../server/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const sags = await prisma.sag.findMany();
    res.status(200).json(sags);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
}