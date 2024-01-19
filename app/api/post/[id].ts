import { NextApiRequest, NextApiResponse } from 'next';
import { getMarkDownWithPost, getPost, getPostBlock, searchPost } from '../../../lib/notion/post';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { id } = req.query;
    const result = await getMarkDownWithPost(id as string);
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}
