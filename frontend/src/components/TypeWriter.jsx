import {useTypewriter} from '../hooks/typeeffect'

const TypeWriter = ({ text, speed, ...props}) => {
    const displayText = useTypewriter(text, speed);

    return <p {...props}>{displayText}</p>;
};

export default TypeWriter;