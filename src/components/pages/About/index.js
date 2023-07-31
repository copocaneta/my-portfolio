import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { experiences } from '../../../constants';
import { pageVariants } from '../../../utils/page-transition';
import AnimatedLetters from '../../AnimatedLetters';
import PageLoader from '../../PageLoader';
import './index.scss';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232621' }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: `0 0 0 4px ${experience.iconBg}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`,
        // backgroundClip: 'content-box',
      }}
      icon={
        <Box
        // className="flex justify-center items-center w-full h-full"
        // clipPath={'circle'}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </Box>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ magin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, idx) => (
          <li
            key={`experience-point-${idx}`}
            className="text-white-100  text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const About = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      w={'100%'}
      // h={'100%'}
      mt={{ base: '30px', lg: '50px' }}
    >
      <Flex
        as={motion.div}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="out"
        className="container about-page"
        w={'80%'}
        mx={'50px'}
        flexDir={'column'}
        justify={'center'}
      >
        <Text
          as="h1"
          color={{
            base: 'white',
          }}
          fontSize={'48px'}
          fontWeight={'extrabold'}
        >
          About me
        </Text>
        <Box
          display={'flex'}
          gap={'15px'}
          flexDir={'column'}
          color={'#aaa6c3'}
          fontSize={'17px'}
        >
          <Text>
            Hey there! I'm Thiago Bernardi, a Full Stack developer from São
            Paulo, Brazil.
          </Text>
          <Text>
            I've been immersed in the web development world for over 20 years,
            handling both frontend and backend software engineering with
            expertise. While I have a strong affinity for frontend work, my
            backend skills are equally advanced.
          </Text>
          <Text>
            JavaScript and its fantastic frameworks have played a major role in
            my journey. When it comes to the frontend, I specialize in React,
            utilizing tools like Gatsby and Next.js to create exceptional user
            experiences. Of course, I'm well-versed in CSS and adhere to best
            practices to ensure clean code and optimal styling.
          </Text>
          <Text>
            On the backend side, I have a deep understanding of Node.js. I've
            successfully built robust Rest APIs using frameworks like Express
            and NestJS. It's worth mentioning that I apply Test Driven
            Development (TDD) extensively to backend development, emphasizing
            high-quality code and reliable functionality.
          </Text>
          <Text>
            As a Tech Lead, I've developed strong leadership skills, guiding and
            motivating my team towards success. Taking full ownership of my
            projects and driving them forward is an integral part of my
            approach. I create an environment that fosters collaboration, where
            everyone can contribute their best.
          </Text>
          <Text>
            In the past, I've gained valuable experience with Web3 technologies,
            seamlessly integrating JavaScript (Node.js) with blockchain dapps.
            I've leveraged libraries like Moralis and Alchemy to facilitate
            smooth connections. Although I'm not currently engaged in Web3
            projects, my prior experience has significantly broadened my skill
            set.
          </Text>
          <Text>
            Currently, as a Tech Lead, I harness my technical expertise and
            leadership abilities to guide and mentor the team. My focus is on
            delivering high-quality results and fostering a culture of
            continuous improvement.
          </Text>
          <Flex marginTop={'20px'} flexDir={'col'}>
            <VerticalTimeline>
              {experiences.map((experience, idx) => (
                <ExperienceCard key={idx} experience={experience} />
              ))}
            </VerticalTimeline>
          </Flex>
        </Box>

        <PageLoader />
      </Flex>
    </Box>
  );
};

export default About;
