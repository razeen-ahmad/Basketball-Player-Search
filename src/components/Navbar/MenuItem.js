import React from 'react';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <a>
          <Text display="block" textDecoration="underline" {...rest}>
            {children}
          </Text>
        </a>
      </Link>
    )
};

export default MenuItem;
  