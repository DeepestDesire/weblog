import { useEffect } from 'react';
import Profile from '../../components/profile';

import Container from './components/container';
export default function Page() {
  useEffect(() => {}, []);
  return (
    <>
      <Profile></Profile>
      <Container></Container>
    </>
  );
}
