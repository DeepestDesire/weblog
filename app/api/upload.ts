import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // 禁用默认的 body 解析
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('get Request,start to process');
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: '文件上传失败' });
      }

      const file = files.file[0]; // 获取上传的文件
      const data = fs.readFileSync(file.filepath); // 读取文件内容

      // 这里可以添加处理文件的逻辑

      return res.status(200).json({ message: '文件上传成功', data });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
