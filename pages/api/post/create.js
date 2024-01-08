import { addPost } from '../../../lib/posts';

export default async function handler(request, response) {
  console.log('object :>> ', typeof request.body); 
  return addPost(request.body);
}
