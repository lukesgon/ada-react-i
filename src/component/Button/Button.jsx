import './Button.css';

const Button = ({ children, ...props }) => {
    return (
        <button className={ props.className} id={ props.id } onClick={props.onClick} type={ props.type }>
            { children }
        </button>
    )
};

export default Button;