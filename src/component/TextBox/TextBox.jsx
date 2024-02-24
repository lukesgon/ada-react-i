import './TextBox.css';

const TextBox = ({children, ...props}) => {
    return (
        <p className={props.className} id={props.id}>
            {children}
        </p>
    );
};

export default TextBox;