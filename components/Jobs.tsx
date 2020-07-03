import React from 'react';

import { Job } from '../common/types';

interface JobsProps {
  myJobs: Job[];
}

const Jobs: React.FC<JobsProps> = ({
  myJobs,
}) => {
  return (
    <section>
      <h1>👨🏻‍💻 Work history</h1>

      <p>
        Currently, I am working as an Application Developer at an Austrian based company called FInno Consult. If you or any of your friend / colleagues needs innovation in your company, just give them a call.
      </p>

      <ul className="big-list">
        {
          myJobs && myJobs.map((work, index) => {
            return (
              <li key={`${work.name}_${index}`}>
                <a href={work.url} target="_blank" rel="noopener noreferrer">
                  {work.name}
                </a>
                {' '}
                <span className="comment">{work.period}</span>
              </li>
            )
          })
        }
      </ul>

    </section>
  );
}

export default Jobs;
