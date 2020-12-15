import React from 'react';
import { Heading, Text, Link, List, ListItem } from '@chakra-ui/react';

import { Job } from '../common/types';
import styles from './sections/styles';

interface JobsProps {
  myJobs: Job[];
}

const Jobs: React.FC<JobsProps> = ({
  myJobs,
}) => {
  return (
    <section>
      <Heading variant="commentHeading" pt={4}>
        <span role="img" aria-label="package">👨🏻‍💻</span>
        {' '}
        Work history
      </Heading>

      <Text variant="codeText">
        Currently, I am working as an Application Developer
        at an Austrian based company called FInno Consult.
        If you or any of your friend / colleagues needs innovation
        in your company, just give them a call.
      </Text>

      <List sx={styles.list}>
        {
          myJobs && myJobs.map((job, index) => {
            return (
              <ListItem sx={styles.listItem} key={`${job.name}_${index}`}>
                <span>{job.period}</span>
                {' '}
                {job.position}
                {' '}
                @
                {' '}
                <Link
                  variant="codeLink"
                  href={job.url}
                  isExternal
                >
                  {job.name}
                </Link>
              </ListItem>
            )
          })
        }
      </List>

    </section>
  );
}

export default Jobs;
