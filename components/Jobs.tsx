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
          myJobs && myJobs.map((job, index) => {
            return (
              <li key={`${job.name}_${index}`}>
                <span className="comment">{job.period}</span>
                {' '}
                {job.position}
                {' '}
                @
                {' '}
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  {job.name}
                </a>
              </li>
            )
          })
        }
      </ul>

    </section>
  );
}

export default Jobs;
