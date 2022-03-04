import { Text } from '@chakra-ui/react';
import React from 'react';

import indexCSS from '../styles/index.module.css';

export default function self_description() {
  return (
    <div className={indexCSS.main}>
      <Text
        bgGradient="linear(to-l, #FFBAFC, #A3D7FF)"
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
      >
        める / 2I92me_1
      </Text>
      <h2>Java・TypeScript ✏</h2>
    </div>
  );
}
