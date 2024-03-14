export const Post = () => {
    const author = "Mike Tyson"
    return (
        <div className="post-container">
            <img className="post-img" src="https://img.freepik.com/premium-photo/sunset-with-mountains-river-forest-lake-mountains-trees-beautiful-landscape-with-lake-background-generative-ai_961829-9817.jpg" />
            <div className="post-details">
                <h2 className="post-title">RainBow</h2>
                <p className="post-description">
                    This is something that tells about the post that made by the user
                </p>
                <i className="post-author">{`post by ${author}`}</i>
            </div>
        </div>
    )
}