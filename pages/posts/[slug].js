import { Fragment } from 'react';
import Head from 'next/head';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostFiles } from '../../lib/posts-util';

export default function PostPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.post.title}</title>
                <meta name="description" content={props.post.excerpt} />
            </Head>
            <PostContent post={props.post}/>
        </Fragment>
    );
};

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
        },
        revalidate: 600
    }
};

export function getStaticPaths() {
    const postFiles = getPostFiles();
    const slugs = postFiles.map(slug => slug.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    };
};