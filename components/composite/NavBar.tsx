import React from 'react';
import { useRouter } from 'next/router';
import {
  Switch,
  Text,
  Icon,
  IconButton,
  Tag,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  useDisclosure,
  useColorMode
} from '@chakra-ui/react';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';

const NavBar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { locale, push } = useRouter();

  return (
    <>
      <div className="container py-4">
        <div className="row no-gutters align-items-center d-none d-lg-flex">
          <div className="col-auto">
            <Text
              fontSize="sm"
              variant="menuText"
              backgroundImage="linear-gradient(90deg, #007CF0, #00DFD8)"
              onClick={() => push(`/${locale}`, `/${locale}`, { locale })}
            >
              Home
            </Text>
          </div>
          <div className="col-auto mr-auto">
            <Text
              fontSize="sm"
              variant="menuText"
              backgroundImage="linear-gradient(90deg, #FF4D4D, #F9CB28)"
              // onClick={() => push(`/${locale}/blog`, `/${locale}/blog`, { locale })}
            >
              Blog
              {' '}
              <Tag size="sm" variant="solid" colorScheme="red">
                SOON
              </Tag>
            </Text>
          </div>
          <div className="col-auto pr-2">
            <Text
              variant="linkText"
              color={locale === 'en' ? 'primary' : 'secondary'}
              fontSize="xs"
              onClick={() => push('/en', '/en', { locale: 'en' })}
            >
              EN
            </Text>
          </div>
          <div className="col-auto pr-2">
            <Text
              variant="linkText"
              color={locale === 'hu' ? 'primary' : 'secondary'}
              fontSize="xs"
              onClick={() => push('/hu', '/hu', { locale: 'hu' })}
            >
              HU
            </Text>
          </div>
          <div className="col-auto">
            <Switch
              isChecked={colorMode === 'dark'}
              onChange={() => toggleColorMode()}
              colorScheme="teal"
              size="md"
            />
          </div>
        </div>
        <div className="row align-items-center d-flex d-lg-none">
          <div className="col-auto ml-auto">
            <Icon as={FaBars} onClick={() => onOpen()} />
          </div>
        </div>
      </div>
      <Drawer
        size="xs"
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              <DrawerCloseButton />
              <div className="row align-items-center">
                <div className="col-auto pr-2">
                  {
                    colorMode === 'dark' ? (
                      <IconButton aria-label="Moon icon" onClick={() => toggleColorMode()}>
                        <Icon as={FaMoon} />
                      </IconButton>
                    ) : (
                      <IconButton aria-label="Sun icon" onClick={() => toggleColorMode()}>
                        <Icon as={FaSun} />
                      </IconButton>
                    )
                  }
                </div>
                <div className="col-auto pr-2">
                  <Text
                    variant="linkText"
                    color={locale === 'en' ? 'primary' : 'secondary'}
                    fontSize="xs"
                    onClick={() => push('/en', '/en', { locale: 'en' })}
                  >
                    EN
                  </Text>
                </div>
                <div className="col-auto pr-2">
                  <Text
                    variant="linkText"
                    color={locale === 'hu' ? 'primary' : 'secondary'}
                    fontSize="xs"
                    onClick={() => push('/hu', '/hu', { locale: 'hu' })}
                  >
                    HU
                  </Text>
                </div>
              </div>
            </DrawerHeader>
            <DrawerBody>
              <div className="row">
                <div className="col-12 pb-2">
                  <Text
                    fontSize="sm"
                    variant="menuText"
                    backgroundImage="linear-gradient(90deg, #007CF0, #00DFD8)"
                    onClick={() => push(`/${locale}`, `/${locale}`, { locale })}
                  >
                    Home
                  </Text>
                </div>
                <div className="col-12 pb-2">
                  <Text
                    fontSize="sm"
                    variant="menuText"
                    backgroundImage="linear-gradient(90deg, #FF4D4D, #F9CB28)"
                    // onClick={() => push(`/${locale}/blog`, `/${locale}/blog`, { locale })}
                  >
                    Blog 
                    {' '}
                    <Tag size="sm" variant="solid" colorScheme="red">
                      SOON
                    </Tag>
                  </Text>
                </div>
              </div>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
};

export default NavBar;