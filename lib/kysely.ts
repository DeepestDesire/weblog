import { Generated } from 'kysely';
import { createKysely } from '@vercel/postgres-kysely';

interface UserTable {
  // Columns that are generated by the database should be marked
  // using the `Generated` type. This way they are automatically
  // made optional in inserts and updates.
  id: Generated<string>;
  name: string;
  email: string;
  image: string;
}
interface PostTable {
  // Columns that are generated by the database should be marked
  // using the `Generated` type. This way they are automatically
  // made optional in inserts and updates.
  id: Generated<string>;
  title: string;
  content: string;
  published: Boolean;
  authorId: string;
}

// Keys of this interface are table names.
export interface Database {
  users: UserTable;
  Post: PostTable;
}

export const db = createKysely<Database>();
export { sql } from 'kysely';
