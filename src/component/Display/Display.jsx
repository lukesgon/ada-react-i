import './Display.css'

const Display = ({children, ...props}) => {
    return (
        <section id={props.id}>
            { children }
        </section>
    )
};

export default Display;