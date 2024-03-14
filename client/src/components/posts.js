export const Post = ({props}) => {
    return (
        <div className="post-container">
            <img className="post-img" src={props.url} />
            <div className="post-details">
                <h2 className="post-title">{props.title}</h2>
                <p className="post-description">
                    {props.description}
                </p>
                <i className="post-author">{`post by ${props.author}`}</i>
            </div>
        </div>
    )
}