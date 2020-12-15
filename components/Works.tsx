import React  from 'react';
import { Heading, Text, Link, List, ListItem } from '@chakra-ui/react';

import { Work } from '../common/types';
import styles from './sections/styles';

interface WorksProps {
  myWorks: Work[];
}

const Works: React.FC<WorksProps> = ({
  myWorks,
}): JSX.Element => {
    return (
      <section>
        <Heading variant="commentHeading">
          <span role="img" aria-label="package">📦</span>
          {' '}
          My latest works
        </Heading>

        <Text variant="codeText">
          You can find my latest works on my
          {' '}
          <a href="https://github.com/Sqveeze/">GitHub</a>
          {' '}
          profile.
        </Text>

        <List 
          sx={styles.list}
        >
          {
            myWorks && myWorks.map((work, index) => {
              return (
                <ListItem sx={styles.listItem} key={`${work.title}_${index}`}>
                  {
                    work.source && (
                      <Link
                        variant="codeLink"
                        href={work.source}
                        isExternal
                      >
                        @
                      </Link>
                    )
                  }
                  <Link
                    variant="codeLink"
                    href={work.link}
                    isExternal
                  >
                    {' '}
                    {work.title}
                  </Link>
                  {' '}
                  <span>
                    {' '}
                    {work.stack}
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
