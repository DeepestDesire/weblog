import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getPostDataFromServer(id) {
  const filteredPosts = await prisma.post.findMany({
    where: {
      OR: [{ id: { contains: id } }],
    },
  });

  return {
    ...filteredPosts[0],
    date: new Date().toJSON(),
  };
}

export async function getAllPostIdsFromServer() {
  const filteredPosts = await prisma.post.findMany();

  const result = filteredPosts.map((row) => {
    return {
      params: {
        id: row.id,
      },
    };
  });

  return result;
}

export async function getSortedPostsData() {
  const filteredPosts = await prisma.post.findMany();

  const result = filteredPosts.map((row) => {
    return {
      ...row,
    };
  });

  return result;
}
