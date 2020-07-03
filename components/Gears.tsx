import React  from 'react';

import { Gear } from '../common/types';

interface WorksProps {
  myGears: Gear[];
}

const Works: React.FC<WorksProps> = ({
  myGears,
}): JSX.Element => {
    return (
      <section>
        <h1 className="first">
          <span role="img" aria-label="package">⚙️</span>
          {' '}
          My gears
        </h1>

        <p>
          These stuffs powers my daily works.
        </p>

        <ul className="big-list">
          {
            myGears && myGears.map((gear, index) => {
              return (
                <li key={`${gear.title}_${index}`}>
                  <span className="comment">
                    {' '}
                    {gear.title}
                    {' '}
                  </span>
                  {' '}
                  <a
                    href={gear.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {gear.text}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </section>
    );
}

export default Works;
