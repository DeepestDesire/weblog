import { deletePost } from '../../../lib/posts';

export default async function handler(request, response) {
  console.log('handler delete request :>> ', request.body.id);
  const result = await deletePost(request.body.id);
  return response.status(200).json({ numDeletedRows: result.numDeletedRows });
}
