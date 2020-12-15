import React from 'react';
import moment from 'moment';
import { Text, Icon, IconButton, Link, Tooltip } from '@chakra-ui/react';
import { FaCoffee } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <div className="container py-4">
      <div className="row align-items-center">
        <div className="col">
          <Text fontSize="xs" variant="codeText">
            Copyright &copy; Márk Pap
            {' '}
            -
            {' '}
            {moment().year()}
          </Text>
        </div>
        <div className="col-auto">
          <Link
            href="https://ko-fi.com/sqveeze"
            isExternal
          >
            <Tooltip label="Buy me a coffee" aria-label="A tooltip">
              <IconButton aria-label="ko-fi">
                <Icon as={FaCoffee} />
              </IconButton>
            </Tooltip>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;