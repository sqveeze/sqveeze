import React from 'react';
import moment from 'moment';
import Link from 'next/link';

// import { Article } from '../common/types';

interface ArticlesProps {
  articles: any[];
}

const Articles: React.FC<ArticlesProps> = ({
  articles,
}) => {
  return (
    <section>
      <h1>📝 Articles</h1>

      <ul className="big-list">
        {
          articles && articles.map((article) => {
            return (
              <li key={`${article.slug}`}>
                <span className="comment">{moment(article.first_published_at).format('YYYY-MM-DD HH:mm')}</span>
                {' '}
                <Link href={`/post/${article.slug}`}>
                  <a>
                    {article.content.title.length > 50 ? `${article.content.title.substr(0, 50)}...` : `${article.content.title}`}
                  </a>
                </Link>
                {' '}
                {article.content.intro.length > 75 ? `${article.content.intro.substr(0, 75)}...` : `${article.content.intro}`}
              </li>
            )
          })
        }
      </ul>

    </section>
  );
}

export default Articles;
