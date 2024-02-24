import './Input.css';

const Input = (props) => {
    return (
        <label htmlFor={props.name}>
            {props.label}
            <input 
            type={props.type}
            name={props.name}
            id={props.name}
            className={`input-${props.type}`}
            placeholder={props.placeholder}
            autoComplete={props.autocomplete}
            />
        </label>
    );
};

export default Input;