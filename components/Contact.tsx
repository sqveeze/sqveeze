import React from 'react';
import { Heading, Text, Link, List, ListItem } from '@chakra-ui/react';

import styles from './sections/styles';

const Contact: React.FC = (): JSX.Element => {
  const contacts = [{
    title: 'E-mail:',
    link: "mailto:sqveeze0@gmail.com",
    linkText: "sqveeze0@gmail.com",
  }, {
    title: 'LinkedIn:',
    link: 'https://www.linkedin.com/in/sqveeze',
    linkText: 'Márk Pap',
  }, {
    title: 'Skype:',
    link: 'skype:live:sqveeze?chat',
    linkText: 'live:sqveeze',
  }, {
    title: 'GitHub:',
    link: 'https://github.com/Sqveeze',
    linkText: 'Sqveeze',
  }]

  return (
    <section>
      <Heading variant="commentHeading" pt={4}>
        <span role="img" aria-label="package">🤝</span>
        {' '}
        Let&apos;s connect?
      </Heading>

      <Text variant="codeText">
        If you would like to know more about my availability
        for a project or app, drop me an email, or write a message at any of:
      </Text>

      <List sx={styles.list}>
        {
          contacts.map((contact) => {
            return (
              <ListItem sx={styles.listItem}>
                {contact.title}
                {' '}
                <Link
                  variant="codeLink"
                  href={contact.link}
                  isExternal
                >
                  {contact.linkText}
                </Link>
              </ListItem>
            )
          })
        }
      </List>
    </section>
  );
}

export default Contact;
