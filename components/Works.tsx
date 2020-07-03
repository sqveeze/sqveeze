import React  from 'react';

import { Work } from '../common/types';

interface WorksProps {
  myWorks: Work[];
}

const Works: React.FC<WorksProps> = ({
  myWorks,
}): JSX.Element => {
    return (
      <section>
        <h1 className="first">
          <span role="img" aria-label="package">📦</span>
          {' '}
          My latest works
        </h1>

        <p>
          You can find latest works on my
          {' '}
          <a href="https://github.com/Sqveeze/">GitHub</a>
          {' '}
          profile.
        </p>

        <ul className="big-list">
          {
            myWorks && myWorks.map((work, index) => {
              return (
                <li key={`${work.title}_${index}`}>
                  {
                    work.source && (
                      <a
                        href={work.source}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @
                      </a>
                    )
                  }
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    {work.title}
                  </a>
                  {' '}
                  <span className="comment">
                    {' '}
                    {work.stack}
                    {' '}
                  </span>
                </li>
              )
            })
          }
        </ul>
      </section>
    );
}

export default Works;
