import { GetStaticProps } from 'next';
import React from 'react';

import Page from '../views/home/Home';
import { Job, Work, OpenSourceItem, Gear, HomeProps} from "../common/types";
import { getAllPostsForHome } from '../lib/api'

const Home = (props: JSX.IntrinsicAttributes & HomeProps & { children?: React.ReactNode; }) => <Page {...props} />;

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const articles = (await getAllPostsForHome(preview)) || []

  const jobs: Job[] = [{
    name: 'FInno Consult GmbH.',
    url: 'https://finnoconsult.at',
    position: 'Full-Stack Developer',
    period: '2020 april - present',
  }, {
    name: 'Freelancer',
    url: '#',
    position: 'Full-Stack Developer',
    period: '2019 april - 2020 april'
  }, {
    name: 'CodeYard Kft.',
    url: 'https://codeyard.eu',
    position: 'Front-end Developer',
    period: '2018 april - 2019 april',
  }, {
    name: 'Kulcs-Soft Nyrt.',
    url: 'https://kulcs-soft.hu',
    position: 'Front-end Developer / Software Tester',
    period: '2016 august - 2017 april',
  }];

  const works: Work[] = [{
    title: '500 Méter',
    link: 'https://500meter.dogpaw.io',
    stack: 'React, Typescript, HERE Maps',
  }, {
    title: 'Dogpaw.io (Under development)',
    link: 'https://dogpaw.io',
    stack: 'NodeJS, Strapi, NextJS, React, React Native, Typescript, Postgres, GraphQL'
  }, {
    title: 'This website',
    link: 'https://sqveeze.hu',
    stack: 'NextJS, React, Typescript, Storyblok',
    source: 'https://github.com/Sqveeze/sqveeze',
  }];

  const openSourceProjects: OpenSourceItem[] = [
  // {
  // title: 'Szépségvarázs Hajdúböszörmény',
  // link: 'https://szepsegvarazs-hb.hu',
  // stack: 'NextJS(Static), Typescript, Vercel\'s serverless functions',
  // },
  {
    title: 'Finnoconsult Website',
    link: 'https://finnoconsult.at',
    via: '@Finno Consult',
    stack: 'Gatsby, React, Typescript, GitHub Actions, NodeJS, Strapi, Postgres'
  }, {
    title: 'ADAC Openhouse',
    link: 'https://schluessel.adac.de',
    via: '@Finno Consult',
    stack: 'NodeJS, Koa, React, Typescript, Inversify, Postgres',
  }, {
    title: 'FInno Blog',
    link: 'https://blog.finnoconsult.at',
    via: '@Finno Consult',
    stack: 'NodeJS, Strapi, React, Typescript, Postgres, Metalsmith',
  }, {
    title: '6forint',
    link: 'https://6forint.hu',
    via: '@Freelancer developer',
    stack: 'PHP, Laravel, Vue, NodeJS, MongoDB, MySql, SocketIO',
  }, {
    title: 'Xeropan Web',
    link: 'https://xeropan.com',
    via: '@CodeYard',
    stack: 'Vue',
  }, {
    title: 'RARE CandidX',
    link: 'https://rarerecruitment.co.uk',
    via: '@CodeYard',
    stack: 'Vue',
  }, {
    title: 'BizXpert',
    link: 'https://bizxpert.hu',
    via: '@Kulcs-Soft',
    stack: 'HTML(Jade), CSS(SASS), JS(CoffeeScript), Gulp',
  }, {
    title: 'Kulcs webshop',
    link: 'https://kulcs-soft.hu',
    via: '@Kulcs-Soft',
    stack: 'HTML, CSS, JavaScript, jQuery',
  }, {
    title: 'Kulcs Soft website',
    link: 'https://kulcs-soft.hu',
    via: '@Kulcs-Soft',
    stack: 'Testing',
  }, {
    text: '...and the rest (over 30 in total with the above), which i am not able to talk about because of laws 😬 Not sure the above are premitted tho. 😂',
  }];

  const openSourceContributions: OpenSourceItem[] = [{
    title: 'Strapi',
    link: 'https://github.com/team-appforge/strapi-provider-upload-scaleway',
    text: 'Scaleway upload provider for Strapi. Scaleway is a cloud provider which offers block storage.',
  }];

  const myGears: Gear[] = [{
    title: 'Computer',
    text: 'MacBook Pro 13"',
  }, {
    title: 'Mouse',
    text: 'Magic Mouse 2',
  }, {
    title: 'IDE',
    text: 'IntelliJ Idea',
    link: 'https://www.jetbrains.com/idea',
  }, {
    title: 'Favourite Site Framework',
    text: 'NextJS',
    link: 'https://nextjs.com',
  }, {
    title: 'Favourite Backend Framework',
    text: 'Strapi',
    link: 'https://stapi.io',
  }, {
    title: 'Hosting (Front-end) & Serverless',
    text: 'Vercel',
    link: 'https://vercel.com',
  }, {
    title: 'Hosting (Back-end) & Database',
    text: 'Heroku',
    link: 'https://heroku.com',
  }];

  return {
    props: {
      myJobs: [...jobs],
      myWorks: [...works],
      openSource: {
        projects: [...openSourceProjects],
        contributions: [...openSourceContributions],
      },
      myGears: [...myGears],
      articles,
    },
  };
}

export default Home;
