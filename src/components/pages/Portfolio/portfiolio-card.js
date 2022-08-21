import { AddIcon } from '@chakra-ui/icons';
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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

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
  return (
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
        <Text as="span" color="black">
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
  );
};

export default PortfolioCardItem;
