import React from 'react';

import About from '../../components/About';
import Works from '../../components/Works';
import OpenSource from '../../components/OpenSource';
import Gears from '../../components/Gears';
import Jobs from '../../components/Jobs';
import Contact from '../../components/Contact';
import Articles from '../../components/Articles';
import Download from '../../components/Download';

import { Layout } from '../../components/layout';

import { HomeProps } from '../../common/types';

const Home: React.FC<HomeProps> = ({
  myJobs,
  myWorks,
  myGears,
  openSource,
  articles,
}): JSX.Element => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-12">
            <About />
          </div>
          <div className="col-12">
            <Works myWorks={myWorks} />
          </div>
          <div className="col-12">
            <OpenSource projects={openSource.projects} contributions={openSource.contributions} />
          </div>
          <div className="col-12">
            <Gears myGears={myGears} />
          </div>
          <div className="col-12">
            <Jobs myJobs={myJobs} />
          </div>
          {/* <div className="col-12">
            <Articles articles={articles} />
          </div> */}
          <div className="col-12">
            <Contact />
          </div>
          {/* <div className="col-12">
            <Download />
          </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
