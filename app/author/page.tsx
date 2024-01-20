import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import Image from 'next/image';

export default async function Page() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <div className="text-black"> {JSON.stringify(session, null, 2)}</div>
      <Image alt="avatar" src={session?.user?.image ?? '/'} width={200} height={200}></Image>
    </div>
  );
}
