import { signIn } from 'next-auth/react';
export default function Profile() {
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
