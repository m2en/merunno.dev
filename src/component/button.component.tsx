import { Button, Circle } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

export default function ButtonC() {
  return (
    <main>
      <div>
        <Circle w="100%" h="50px">
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
        </Circle>
      </div>
    </main>
  );
}
