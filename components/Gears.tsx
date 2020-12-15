import React  from 'react';
import { Heading, Text, Link, List, ListItem } from '@chakra-ui/react';

import { Gear } from '../common/types';
import styles from './sections/styles';

interface WorksProps {
  myGears: Gear[];
}

const Works: React.FC<WorksProps> = ({
  myGears,
}): JSX.Element => {
    return (
      <section>
        <Heading variant="commentHeading" pt={4}>
          <span role="img" aria-label="package">⚙️</span>
          {' '}
          My gears
        </Heading>

        <Text variant="codeText">
          These stuffs powers my daily works.
        </Text>

        <List sx={styles.list}>
          {
            myGears && myGears.map((gear, index) => {
              return (
                <ListItem sx={styles.listItem} key={`${gear.title}_${index}`}>
                  <span className="comment">
                    {' '}
                    {gear.title}
                    {' '}
                  </span>
                  {' '}
                  <Link
                    variant="codeLink"
                    href={gear.link}
                    isExternal
                  >
                    {gear.text}
                  </Link>
                </ListItem>
              )
            })
          }
        </List>
      </section>
    );
}

export default Works;
