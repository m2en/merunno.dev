import { Image } from '@chakra-ui/image';

export function Header() {
  return (
    <main>
      <Image
        src={'https://github.com/merunno.png'}
        alt={'merunno icon'}
        borderRadius={'100'}
        width={100}
        height={100}
      />
    </main>
  );
}
