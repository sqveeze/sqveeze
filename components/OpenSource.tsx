import React  from 'react';
import { Heading, Text, Link, List, ListItem } from '@chakra-ui/react';

import { OpenSource } from '../common/types';
import styles from './sections/styles';

const Works: React.FC<OpenSource> = ({
  projects,
  contributions,
}): JSX.Element => {
    return (
      <section>
        <Heading variant="commentHeading" pt={4}>
          <span role="img" aria-label="under construction">🚧</span>
          {' '}
          Projects & Contributions
        </Heading>

        <Text variant="codeText">
          Projects
        </Text>

        <List sx={styles.list}>
          {
            projects && projects.map((project, index) => {
              return (
                <ListItem sx={styles.listItem} key={`${project.title}_${index}`}>
                  <Link
                    variant="codeLink"
                    href={project.link}
                    isExternal
                  >
                    {' '}
                    {project.title}
                  </Link>
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
                </ListItem>
              )
            })
          }
        </List>

        <Text variant="codeText">
          Contributions
        </Text>

        <List sx={styles.list}>
          {
            contributions && contributions.map((contribution, index) => {
              return (
                <ListItem sx={styles.listItem} key={`${contribution.title}_${index}`}>
                  <Link
                    variant="textLink"
                    href={contribution.link}
                    isExternal
                  >
                    {' '}
                    {contribution.title}
                  </Link>
                  {' '}
                  <span>
                    {' '}
                    {contribution.text}
                    {' '}
                  </span>
                </ListItem>
              )
            })
          }
        </List>
      </section>
    );
}

export default Works;
