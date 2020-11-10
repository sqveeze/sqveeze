import React from 'react';
import moment from 'moment';

const About = () => {
  return (
    <section>
      <h1 className="first">
        <span role="img" aria-label="wave">👋</span>
        {' '}
        Hi there, this is Márk.
      </h1>
      <p>
        I am
        {' '}
        {moment().diff(moment('1993-06-25'), 'years')}
        {' '}
        year old and living in Debrecen, Hungary. I am an
        {' '}
        <strong>application developer</strong>
        .
      </p>
      <p>
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
      </p>
      <p>
        My current learning path is: <strong>Go</strong>, <strong>Python</strong> and <strong>Rust</strong>
      </p>
      <p>
        My <strong>goal</strong> is, to switch from web to mobile development using <strong>React Native</strong>, <strong>Swift</strong> and <strong>Objective C</strong>. No plans for native android development. Also i would like to finish my Dog community application and kickstart my own developer company.
      </p>
      <p>
        In the future, i would like to run my own application
        {' '}
        developer company, which is already exists and called
        {' '}
        <strong><a href="https://appforge.hu">AppForge</a></strong>
        , however it is not yet ready to be my main job.
        {' '}
        If you&apos;re interrested in this, contact me.
      </p>
      <p>
        I also have some hobbies ⚽️ I used to play football for one and half year. Dogs all the way (because dogs are cool 🐶), you can find my dog on my instagram or <a href="https://instagram.com/szupermaszat">@szupermaszat</a> Also, i did some cool tricks on my BMX bike, however after a minor accident, i had to stop with extreme sports, glad i didn't fallen bigger 🙏
      </p>
    </section>
  );
}

export default About;
