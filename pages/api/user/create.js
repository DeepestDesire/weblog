import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  const id = request.query.id;
  const name = request.query.name;
  const email = request.query.email;

  try {
    if (!id || !name) throw new Error('Pet and owner names required');
    await sql`INSERT INTO users (id, name, email, updated_at) VALUES (${id}, ${name}, ${email}, ${new Date().toJSON()});`;
  } catch (error) {
    console.log('errer :>> ', error);
    return response.status(500).json({ error });
  }

  const users = await sql`SELECT * FROM User;`;
  return response.status(200).json({ users });
}
