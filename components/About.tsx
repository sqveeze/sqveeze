import React from 'react';
import moment from 'moment';
import { Heading, Text, Link } from '@chakra-ui/react';

const About = () => {
  return (
    <section>
      <Heading variant="commentHeading">
        <span role="img" aria-label="wave">👋</span>
        {' '}
        Hi there, this is Márk.
      </Heading>
      <Text variant="codeText">
        I am
        {' '}
        {moment().diff(moment('1993-06-25'), 'years')}
        {' '}
        year old and living in Debrecen, Hungary. I am an
        {' '}
        <strong>application developer</strong>
        .
      </Text>
      <Text variant="codeText">
        {' '}
        Currently i write applications using
        {' '}
        <strong>NodeJS</strong>
        ,
        {' '}
        <strong>React</strong>
        ,
        {' '}
        <strong>React Native</strong>
        ,
        {' '}
        <strong>Swift</strong>
        ,
        {' '}
        <strong>Objective C</strong>
        , and
        {' '}
        <strong>Python</strong>
        . Long time ago i was used to develop applications and websites with
        {' '}
        <strong>PHP</strong>
        , however i almost completely dropped it because of the newer
        {' '}
        and often stronger languages become more successful.
      </Text>
      <Text variant="codeText">
        My current learning path is: 
        {' '}
        <strong>Go</strong>
        , 
        {' '}
        <strong>Python</strong>
        {' '}
        and 
        {' '}
        <strong>Rust</strong>
      </Text>
      <Text variant="codeText">
        My 
        {' '}
        <strong>future goal</strong>
        {' '}
        is, to switch from web to mobile development using 
        {' '}
        <strong>React Native</strong>
        , 
        {' '}
        <strong>Swift</strong>
        {' '}
        and 
        {' '}
        <strong>Objective C</strong>
        {' '}
        with backend in 
        {' '}
        <strong>Node</strong>
        {' '}
        or 
        {' '}
        <strong>Python</strong>
        . No plans for native android development.
        Also i would like to finish my Dog community
        application and kickstart my own developer company.
      </Text>
      <Text variant="codeText">
        In the future, i would like to run my own application
        {' '}
        developer company, which is already exists and called
        {' '}
        <Link isExternal variant="codeLink" href="https://appforge.hu">AppForge</Link>
        , however it is not yet ready to be my main job.
        {' '}
        If you&apos;re interrested in this, contact me.
      </Text>
      <Text variant="codeText">
        I also have some hobbies ⚽️ I used to play football
        for one and half year. Dogs all the way (because dogs
        are cool 🐶), you can find my dog on my instagram or 
        {' '}
        <Link
          isExternal
          variant="codeLink"
          href="https://instagram.com/szupermaszat"
        >
          @szupermaszat
        </Link>
        {' '}
        Also, i did some cool tricks on my BMX bike,
        however after a minor accident, i had to stop
        with extreme sports, glad i didn&apos;t fallen bigger 🙏
      </Text>
    </section>
  );
}

export default About;
