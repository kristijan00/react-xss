import React from 'react';
import { useRef, useState } from 'react';

interface LoginProps {
    getComment: (commentObj: { message: string, link: string }) => void;
}


const Login: React.FC<LoginProps> = ({ getComment }) => {

    const textRef = useRef<HTMLInputElement>(null);
    const textRefThree = useRef<HTMLInputElement>(null);

    const [messageValue, setMessageValue] = useState<string>('');
    const [linkValue, setLinkValue] = useState<string>('');

    const handleClick = () => {
        if (textRef.current && textRef.current.value !== '' && textRefThree.current) {
            getComment({ message: messageValue, link: linkValue });
            textRef.current.value = '';
            textRefThree.current.value= '';
         }
    }

    return (
        <div id='msg'>
            <label>Message<br />
                <input ref={textRef} onChange={(event) => setMessageValue(event.target.value)}></input>
            </label><br />
            <img src='' alt='' />

            <label>Link<br />
                <input ref={textRefThree} onChange={(event) => setLinkValue(event.target.value)}></input>
            </label> <br />
            <button onClick={handleClick}>Submit</button> <br />
        </div>
    );
};

export default Login;