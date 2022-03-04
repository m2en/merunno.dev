import React from 'react';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';

export function BackButton() {
  return (
    <Link href="/">
      <Button colorScheme="teal" variant="ghost">
        <Link href="/">戻る</Link>
      </Button>
    </Link>
  );
}
