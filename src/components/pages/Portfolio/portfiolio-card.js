import { AddIcon, InfoIcon } from '@chakra-ui/icons';
import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const PortfolioCardItem = ({
  orderOnPage,
  item,
  idx,
  controls,
  startPortAnimation,
  firstLoad,
  onOpen,
  setModalData,
}) => {
  const ref = useRef();
  const theme = useTheme();
  return (
    <Flippy
      flipOnHover={{ base: false, lg: true }} // default false
      flipOnClick={{ base: false, lg: true }}
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      onClick={() => {
        onOpen();
        setModalData(item);
      }}
    >
      <Box as={FrontSide} p={0} rounded={30}>
        <Box
          as={motion.div}
          border="1px solid #ccc"
          rounded={30}
          initial={{
            scale: 0,
          }}
          custom={idx}
          animate={
            orderOnPage === 'first'
              ? controls
              : {
                  scale: 1.0,
                  transition: { delay: 0.1 * idx },
                }
          }
          onLoad={() => {
            if (orderOnPage === 'first' && !firstLoad) {
              startPortAnimation();
            }
          }}
        >
          <AspectRatio ratio={16 / 9}>
            <Button
              roundedTop={30}
              p={0}
              onClick={() => {
                onOpen();
                setModalData(item);
              }}
            >
              <Image
                onClick={() => {
                  onOpen();
                  setModalData(item);
                }}
                roundedTop={30}
                src={require(`../../../assets/images/${item.image}`)}
              />
            </Button>
          </AspectRatio>
          <Box mt={'11px'} mx={'15px'}>
            <Text as="span" color="black" isTruncated>
              <strong>{item.name}</strong>
            </Text>
            <HStack my={4} spacing={4}>
              {item.tags.map((tag) => (
                <Tag size={'lg'} key={tag} variant="subtle">
                  <TagLeftIcon boxSize="12px" as={AddIcon} />
                  <TagLabel>{tag}</TagLabel>
                </Tag>
              ))}
            </HStack>
          </Box>
        </Box>
      </Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        as={BackSide}
        rounded={30}
      >
        <Button
          rounded={30}
          w={'100%'}
          h={'100%'}
          p={10}
          background={'transparent'}
          display={'flex'}
          flexDir={'column'}
          _hover={{
            background: 'transparent',
          }}
          gap={4}
          role="group"
          onClick={() => {
            onOpen();
            setModalData(item);
          }}
        >
          <InfoIcon
            w={23}
            h={23}
            color={'#333'}
            _groupHover={{ color: theme.colors.altColorLight }}
          />
          <Text as={'span'} color={'black'}>
            Find out more
          </Text>
        </Button>
      </Box>
    </Flippy>
  );
};

export default PortfolioCardItem;
