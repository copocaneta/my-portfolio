import { Text, useTheme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import LogoTitleT from '../../assets/images/t.svg';
import LogoTitleB from '../../assets/images/b.svg';
import AnimatedLetters from '../AnimatedLetters';
import TypewriterComponent from 'typewriter-effect';

const HomeHeadingText = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <Text
        as="h1"
        color={{ base: 'white', lg: theme.colors.textColorLight }}
        textShadow={{ base: '2px 2px black;', lg: 'none' }}
        wordBreak={'break-all'}
        fontSize={{ base: '46px', lg: '53px' }}
      >
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString('Hello, I am Thiago Bernardi!')
              .pauseFor(2500)
              .deleteChars(1)
              .typeString(', <br> a Frontend')
              .deleteChars(8)
              .typeString('Backend')
              .deleteChars(7)
              .typeString('Fullstack web developer')

              .start();
          }}
          // options={{
          //   strings: ['Hello', 'I am Thiago Bernardi'],
          //   autoStart: true,
          //   loop: true,
          // }}
        />
      </Text>
    </>
  );
};

export default HomeHeadingText;
