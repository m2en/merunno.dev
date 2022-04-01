import { Image } from '@chakra-ui/image';
import { Center, Circle, HStack, Text } from '@chakra-ui/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyIcon from '@mui/icons-material/Key';

export function Header() {
  return (
    <main>
      <Circle>
        <Image
          src={'https://github.com/merunno.png'}
          alt={'merunno icon'}
          borderRadius={'100'}
          width={100}
          height={100}
        />
      </Circle>

      <Text fontSize={'35px'}>merunno</Text>

      <HStack>
        <Center w={'40px'} h={'40px'}>
          <a
            target={'_blank'}
            rel={'noopener noreferrer'}
            href="https://github.com/merunno"
          >
            <GitHubIcon />
          </a>
        </Center>
        <Center w={'50px'} h="40px">
          <a
            target={'_blank'}
            rel={'noopener noreferrer'}
            href={'https://twitter.com/merunno'}
          >
            <TwitterIcon />
          </a>
        </Center>
        <Center w={'50px'} h={'40px'}>
          <a
            target={'_blank'}
            rel={'noopener noreferrer'}
            href={'https://keybase.io/merunno'}
          >
            <KeyIcon />
          </a>
        </Center>
      </HStack>
    </main>
  );
}
