import './Form.css';

const Form = ({children, ...props}) => {
    return (
        <form action={props.action} method={props.method} id={props.id}>
            {children}
        </form>
    );
};

export default Form;