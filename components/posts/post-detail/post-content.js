import ReactMarkdown from 'react-markdown';
import classes from './post-content.module.css';

import PostHeader from './post-header';

// const DUMMY_POST = { 
//     slug: 'getting-started-with-nextjs',
//     title:'Gettind Started with NextJS',
//     image:'getting-started-nextjs.png',
//     date: '2022-02-10',
//     content: '# This is a first post'
// };

export default function PostContent(props) {
    const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imagePath} />
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
    );
};