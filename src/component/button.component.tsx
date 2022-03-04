import { Button, Center } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

export default function ButtonC() {
  return (
    <Center>
      <Link href="/about_me">
        <Button colorScheme="teal" variant="ghost">
          About me
        </Button>
      </Link>
      <Link href="/contacts">
        <Button colorScheme="teal" variant="ghost">
          Contacts
        </Button>
      </Link>
    </Center>
  );
}
