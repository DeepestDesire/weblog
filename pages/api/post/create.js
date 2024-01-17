import { addPost } from '../../../lib/posts';

export default async function handler(request, response) {
  console.log('object :>> ', response);
  return addPost(request.body);
}
