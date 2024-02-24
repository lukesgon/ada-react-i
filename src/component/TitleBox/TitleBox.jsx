import './TitleBox.css'

const TitleBox = ({children, ...props}) => {
    return (
        <h2 className={props.className} id={props.id}>
            {children}
        </h2>
    )
};

export default TitleBox;
