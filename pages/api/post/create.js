
import prisma from '../../../lib/prisma';

export default async function handler(request, response) {
  const id = request.body;





  // const newUser = await prisma.user.create({
  //   data: {
  //     name: 'Elliott',
  //     email: 'xelliottx@example-user.com',
  //   },
  // });
 
  // const users = await prisma.user.findMany();

  return response.status(200).json({ post:102 });
}
