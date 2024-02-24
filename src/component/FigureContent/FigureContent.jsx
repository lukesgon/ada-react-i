import './FigureContent.css';

const FigureContent = ({children, ...props}) => {
    function FigCaption(props) {
        const captionElement = props.caption
        if (captionElement) {
            return (<figcaption>{props.caption}</figcaption>);
        };
    }

    const caption = FigCaption(props);

    return (
        <figure className={props.className} id={props.id}>
            <img src={props.src} alt={props.alt} />
            {caption}
        </figure>
    )
};

export default FigureContent;