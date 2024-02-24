import './ContentBox.css'

const ContentBox = ({children, ...props}) => {
    return (
        <article className={props.className} id={props.id} onClick={props.onClick}>
            {children}
        </article>
    )
};

export default ContentBox;