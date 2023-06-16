import React, { useEffect } from 'react';

const MKpost = () => {

    // useEffect(() => {
    //     fetch(`http://localhost:3001/api/post`)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     items: result
    //                 });
    //                 console.log(result)
    //             },
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    // }, [])

    return <div className='post-page'>
        <h6 className="post-title">Post POST_ID</h6>
        <h1 className="post-title">Post title</h1>
        <br />

        <div className="post__content">
            <div className="post__img">
                <img src="https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg" alt="post.title" />
            </div>

            <div className="post__description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit aut, nihil explicabo, atque eos harum sed nisi natus molestiae labore in omnis dolor neque dignissimos laudantium adipisci officia? Cum, ea?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit aut, nihil explicabo, atque eos harum sed nisi natus molestiae labore in omnis dolor neque dignissimos laudantium adipisci officia? Cum, ea?</p>
            </div>
        </div>
    </div>
}

export default MKpost;