import { NextRequest } from 'next/server';

export async function GET() {
  return Response.json({ message: 'Hello World' });
}

export async function POST(request: NextRequest) {
  // 访问本地的 5000 的服务来处理上传文件处理请求，作为一个接口透传
  const formData = await request.formData(); // 获取表单数据
  const file = formData.get('file');

  const response = await fetch('http://localhost:5000/api/upload', {
    method: 'POST',
    body: formData, // 将 FormData 作为请求体发送
    headers: {
      // 'Content-Type': 'multipart/form-data' // 不需要手动设置，fetch 会自动处理
    },
  });
  return response;
}
