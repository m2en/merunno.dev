import { Box, Button, Center, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Head from 'next/head';

import introductionCSS from '../styles/introduction.module.css';
import AboutMeCSS from '../styles/about_me.module.css';
import { BackButton } from '../component/backButton.component';

export default function Contacts() {
  return (
    <Box>
      <Head>
        <title>merunno.dev / 連絡(リンク)</title>
        <meta charSet="utf-8" />
        <meta
          content="merunnoのポートフォリオ * 連絡(リンク)"
          name="description"
        />

        {/* OGPタグ */}
        <meta property={'og:url'} content={'https://www.merunno.dev/'} />
        <meta property={'og:title'} content={'merunno のポートフォリオ'} />
        <meta
          property={'og:description'}
          content={'merunnoが作ったポートフォリオです。'}
        />
      </Head>

      <div>
        <div className={'title'}>
          <Center w="100%" h="100px">
            <Text
              bgGradient="linear(to-l, #FFBAFC, #A3D7FF)"
              bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
            >
              連絡(リンク)
            </Text>
          </Center>
        </div>

        <div className={'SNS'}>
          <Center w="100%" h="50px">
            <HStack>
              <a
                href="https://github.com/merunno"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colorScheme="teal" variant="solid">
                  GitHub
                </Button>
              </a>
              <a
                href="https://twitter.com/2I92me_1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colorScheme="teal" variant="solid">
                  Twitter
                </Button>
              </a>
              <a
                href="https://keybase.io/merunno"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colorScheme="teal" variant="solid">
                  KeyBase
                </Button>
              </a>
            </HStack>
          </Center>
        </div>

        <div className={'pgp'}>
          <Center w={'100%'} h={'150px'}>
            <div className={introductionCSS.main}>
              <div className={AboutMeCSS.Title}>
                <div className={AboutMeCSS.content}>かわいいGPG鍵</div>
                <p>KeyBase・GitHub Profileで公開</p>

                {/* 公開鍵ファイルのダウンロード */}
                <Center w="100%" h="50px">
                  <a href="/pgp/merunno.asc">
                    <Stack direction={'row'} spacing={4}>
                      <Button colorScheme={'pink'} variant={'outline'}>
                        merunno.pub
                      </Button>
                    </Stack>
                  </a>
                </Center>
              </div>
            </div>
          </Center>
        </div>

        <div className={'mail'}>
          <Center w={'100%'} h={'150px'}>
            <div className={introductionCSS.main}>
              <div className={AboutMeCSS.Title}>
                <div className={AboutMeCSS.content}>メール</div>
                <p>me@merunno.dev</p>
              </div>
            </div>
          </Center>
        </div>

        <div className={'back'}>
          <Center w={'100%'} h={'200px'}>
            <BackButton />
          </Center>
        </div>
      </div>
    </Box>
  );
}
