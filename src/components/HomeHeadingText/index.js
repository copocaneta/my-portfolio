import { Text, useTheme } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import LogoTitleT from '../../assets/images/t.svg';
import LogoTitleB from '../../assets/images/b.svg';
import AnimatedLetters from '../AnimatedLetters';

const HomeHeadingText = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <Text
      as="h1"
      color={{ base: 'white', lg: theme.colors.textColorLight }}
      textShadow={{ base: '2px 2px black;', lg: 'none' }}
      wordBreak={'break-all'}
      fontSize={{ base: '46px', lg: '53px' }}
    >
      <Text>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
      </Text>
      <Text>
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
      </Text>
      <Text>
        <img src={LogoTitleT} alt="Thiago" className="letter-t" />
        <AnimatedLetters
          letterClass={letterClass}
          strArr={'hiago'.split('')}
          idx={15}
        />
        <img src={LogoTitleB} alt="Bernardi" className="letter-b" />
        <AnimatedLetters
          letterClass={letterClass}
          strArr={'ernardi'.split('')}
          idx={20}
        />
      </Text>
      {/* <Text>
              <AnimatedLetters
                letterClass={letterClass}
                strArr={'web developer'.split('')}
                idx={27}
              />
            </Text> */}
    </Text>
  );
};

export default HomeHeadingText;
