import { db } from './kysely';

export async function getSinglePost(id: string) {
  const filteredPosts = await db.selectFrom('Post').selectAll().where('id', '=', id).execute();
  return {
    ...filteredPosts[0],
    date: new Date().toJSON(),
  };
}

export async function getAllPostIdsFromServer() {
  const filteredPosts = await db.selectFrom('Post').selectAll().execute();
  const result = filteredPosts.map((row) => {
    return {
      params: {
        id: row.id,
      },
    };
  });

  return result;
}

export async function getAllPostsData() {
  const filteredPosts = await db.selectFrom('Post').selectAll().execute();

  const result = filteredPosts.map((row) => {
    return {
      ...row,
    };
  });

  return result;
}
