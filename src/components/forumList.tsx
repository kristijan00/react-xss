import React from 'react';
import Forum from './forum';

interface post {
    message: string;
    link: string;
}

interface forumListProps {
    post: post[];
}

const forumList: React.FC<forumListProps> = ({ post }) => {
    return (
        <>
            {post.map((postObject: { message: string; link:string }, idx: any) => 
            { return <Forum key={idx} post={postObject.message} link={postObject.link} /> })}
        </>
    );
};



export default forumList;