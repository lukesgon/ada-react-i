import './FieldSet.css'

const FieldSet = ({ children, ...props }) => {
    return (
        <fieldset className={ props.className } id={props.id}>
            <legend>{ props.legend }</legend>
            {children}
        </fieldset>
    );
};

export default FieldSet;