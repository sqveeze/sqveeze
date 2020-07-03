import React from 'react';
import styled from 'styled-components';

import About from '../../components/About';
import Works from '../../components/Works';
import OpenSource from '../../components/OpenSource';
import Gears from '../../components/Gears';
import Jobs from '../../components/Jobs';
import Contact from '../../components/Contact';

import { HomeProps } from '../../common/types';

const Home: React.FC<HomeProps> = ({
  myJobs,
  myWorks,
  myGears,
  openSource,
}): JSX.Element => {
  return (
    <PageWrapper>
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
          <div className="col-12">
            <Contact />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  /* General */

  ul, li {
    list-style: none;
  }

  strong {
    font-weight: normal;
    color: #CC7832;
  }

  a {
    color: #A5C25C;
    text-decoration: none;
    text-shadow: 1px 1px 0 #2B2B2B, -1px 1px 0 #2B2B2B, 2px 0 0 #2B2B2B, -2px 0 0 #2B2B2B;
    box-shadow: inset 0 -1px 0 0 #2B2B2B, inset 0 -2px 0 0 #A5C25C;
  }

  /* Headings */

  h1 {
    font-size: 14px;
    color: #FFC66D;
    margin-bottom: 16px;
    font-weight: normal;
  }

  h1:before {
    content: '/* ';
  }

  h1:after {
    content: ' */';
  }

  /* Text */

  p {
    margin-left: 25px;
    margin-top: 16px;
    margin-bottom: 16px;
    text-align: justify;
  }

  /* "Comment"-style texts */

  .comment {
    color: #808080;
  }

  .comment:before {
    content: '[';
  }

  .comment:after {
    content: ']';
  }

  /* Lists */

  ul {
    margin-left: 25px;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  li:before {
    content: '- ';
  }

  /* Mobile */

  @media (max-width: 700px) {
    p, ul, .project-description {
      margin-left: 0px;
    }

    ul.big-list li {
      margin-bottom: 16px;
    }
  }
`;

export default Home;
