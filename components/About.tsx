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
        ,
        {' '}
        <strong>Python</strong>
        , and
        {' '}
        <strong>Rust</strong>
        . Long time ago i was used to develop applications and websites with
        {' '}
        <strong>PHP</strong>
        , however i almost completely dropped it because of the newer
        {' '}
        and often stronger languages become more successful.
      </p>
      <p>
        In the future, i would like to run my own application
        {' '}
        developer company, which is already exists and called
        {' '}
        <strong><a href="https://appforge.hu">AppForge</a></strong>
        {' '}
        , however it is not yet ready to be my main job.
        {' '}
        If you&apos;re interrested in this, contact me.
      </p>
    </section>
  );
}

export default About;
