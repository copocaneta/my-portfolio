import { Text, useTheme } from '@chakra-ui/react';
import TypewriterComponent from 'typewriter-effect';
import GraphemeSplitter from 'grapheme-splitter';
import './index.scss';

const HomeHeadingText = () => {
  const theme = useTheme();

  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  return (
    <>
      <Text
        as="h1"
        color={{ base: 'white', lg: theme.colors.textColorLight }}
        textShadow={{ base: '2px 2px black;', lg: 'none' }}
        wordBreak={'break-word'}
        fontSize={{ base: '46px', lg: '53px' }}
        lineHeight={'38px'}
        className={'home-heading'}
      >
        <TypewriterComponent
          options={{
            stringSplitter,
            skipAddStyles: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1000)
              .typeString(
                `<span style='line-height:1em;'>Hello 👋, <br>I'm Thiago Bernardi!</span>`
              )
              .pauseFor(2500)
              .deleteChars(1)
              .callFunction((state) => {
                state.elements.cursor.style.fontSize = '0.7em';
                // state.elements.wrapper.style.fontSize = '120px';
              })
              .typeString(
                ', <br> <span style="font-size: 0.7em;">Frontend</span>'
              )
              .deleteChars(8)
              .typeString('<span style="font-size: 0.7em;">Backend</span>')
              .deleteChars(7)
              .typeString(
                '<span style="font-size: 0.7em;">Fullstack web developer</span>'
              )

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
