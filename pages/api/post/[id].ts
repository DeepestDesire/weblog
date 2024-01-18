import { NextApiRequest, NextApiResponse } from 'next';
import { getSinglePost } from '../../../lib/posts';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const result = await getSinglePost(id as string);
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}
