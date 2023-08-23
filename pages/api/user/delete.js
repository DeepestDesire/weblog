import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const email = request.query.email;

  try {
    if (!email) throw new Error('email required');
    await sql`DELETE FROM users WHERE id=${email}`;
  } catch (error) {
    console.log('errer :>> ', error);
    return response.status(500).json({ error });
  }

  const users = await sql`SELECT * FROM users;`;
  return response.status(200).json({ users });
}
