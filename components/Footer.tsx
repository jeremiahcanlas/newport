import {
  Text,
  Box,
  Container,
  Link,
  Icon,
  HStack,
  useColorMode,
} from '@chakra-ui/react';
import { Link as LinkScroll } from 'react-scroll';
import { FaGithub, FaLinkedin, FaChevronUp } from 'react-icons/fa';
import portfolioData from '../public/data/data.json';
import mapIcon from '../utils/mapIcon';

const Footer = () => {
  const { colorMode } = useColorMode();

  const { resume } = portfolioData;

  return (
    <Container textAlign="center" py="0.8em">
      <Box mb="2em">
        <LinkScroll to="scroll-top" smooth duration={800}>
          <Icon
            as={FaChevronUp}
            color={colorMode === 'light' ? 'black' : 'white'}
            fontSize="1em"
            cursor="pointer"
          />
        </LinkScroll>

        <Text fontSize={'0.8em'}>Back to Top</Text>
      </Box>

      <HStack spacing={'1.5em'} justify="center" mx="auto">
        {resume.social
          .filter((item) => item.showInFooter)
          .map((item) => (
            <Link
              href={item.url}
              isExternal
              cursor="pointer"
              _focus={{ outline: 'none' }}
              key={`social_key_${item.name}`}
            >
              <Icon
                as={mapIcon(item.name)}
                color={colorMode === 'light' ? 'black' : 'white'}
                fontSize="2em"
                mb="1em"
                opacity="0.8"
                _hover={{ opacity: '1', color: 'smoke' }}
              />
            </Link>
          ))}
      </HStack>

      <Text fontWeight="300" fontSize="0.8em" letterSpacing="0.8px">
        {new Date().getFullYear()} {resume.name}
      </Text>
    </Container>
  );
};

export default Footer;
