import React  from 'react';

import { OpenSource } from '../common/types';

const Works: React.FC<OpenSource> = ({
  projects,
  contributions,
}): JSX.Element => {
    return (
      <section>
        <h1 className="first">
          <span role="img" aria-label="under construction">🚧</span>
          {' '}
          Projects & Contributions
        </h1>

        <p>
          Projects
        </p>

        <ul className="big-list">
          {
            projects && projects.map((project, index) => {
              return (
                <li key={`${project.title}_${index}`}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    {project.title}
                  </a>
                  {' '}
                  {project.via && project.via}
                  {' '}
                  {project.text && project.text}
                  {' '}
                  {project.stack && (
                    <span className="comment">
                      {' '}
                      {project.stack}
                      {' '}
                    </span>
                  )}
                </li>
              )
            })
          }
        </ul>

        <p>
          Contributions
        </p>

        <ul className="big-list">
          {
            contributions && contributions.map((contribution, index) => {
              return (
                <li key={`${contribution.title}_${index}`}>
                  <a
                    href={contribution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    {contribution.title}
                  </a>
                  {' '}
                  <span className="comment">
                    {' '}
                    {contribution.text}
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
