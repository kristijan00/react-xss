import React from 'react';

interface forumProps {
    post: string;
    link: string;
}

const forum: React.FC<forumProps> = ({ post, link }) => {
    return (
        <div className="singlePost">
            <p>Comment:</p>
            <div className="text" dangerouslySetInnerHTML={{__html:post}}></div>
            <a href={link} target="_blank" rel="noreferrer" >Open the provided link</a>
            <img src='' alt=''/>
        </div>
    );
};

export default forum;