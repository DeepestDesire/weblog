import { addPost } from '../../../lib/posts';

export default async function handler(request, response) {
  console.log('create post :>> ', response);
  return addPost(request.body);
}
