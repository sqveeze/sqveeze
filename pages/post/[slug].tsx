import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import ErrorPage from 'next/error';
import Head from 'next/head';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { render } from 'storyblok-rich-text-react-renderer';

import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';

const ArticleStyles = styled.article`
  img {
    max-width: 100%;
    height: auto;
  }
  .image-container {
    display: flex;
    justify-content: center;
  }
`;

const Post = ({ post, morePosts, preview }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div className="container mx-auto">
      <p>
        ⬅️ {' '}
        <Link href="/"><a>Go back</a></Link>
      </p>
      
      <ArticleStyles>
        <Head>
          <title>
            {post.content.title}
          </title>
          <meta property="og:image" content={post.content.image} />
        </Head>
        <h1>
          <span role="img" aria-label="package">📰</span>
          {' '}
          {post.content.title}
        </h1>
        <p>
          <div className="image-container">
            <img src={post.content.image}/>
          </div>
        </p>
        <p>
          <span className="comment">
            {post.content.intro}
          </span>
        </p>
        {
          post?.content?.long_text.content?.map((item: any) => {
            if(item.type === 'paragraph') {
              return (
                <p>
                  {item?.content?.map((paragraph) => {
                    if (paragraph.type === 'text') return paragraph.text;
                    if (paragraph.type === 'image') return (
                      <img {...paragraph.attrs} />
                    )
                  })}
                </p>
              )
            }
            if(item.type === 'code_block') {
              return (
                <p>
                  <SyntaxHighlighter language="typescript" style={coldarkDark}>
                    {item.content[0].text}
                  </SyntaxHighlighter>
                </p>
              )
            }
          })
        }
        {/* <PostHeader
          title={post.content.title}
          coverImage={post.content.image}
          date={post.first_published_at || post.published_at}
          author={post.content.author}
        />
        <PostBody content={post.html} /> */}
      </ArticleStyles>
      {/* <SectionSeparator /> */}
      {/* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
    </div>
  )
}

export default Post;

export async function getStaticProps({ params, preview = null }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: {
        ...data.post,
        // html: data.post?.content?.long_text
        //   ? render(data.post.content.long_text)
        //   : null,
      },
      morePosts: data.morePosts,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map((post) => `/post/${post.slug}`) || [],
    fallback: true,
  }
}