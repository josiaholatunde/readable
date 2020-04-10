import React, { Fragment } from 'react'

const Post = ({ post }) => {
    return (
        <Fragment>
            <div className='col-lg-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h5>
                            {post.title}
                        </h5>
                        <p className='card-text'> {post.body} </p>
                        <div>
                            <span>Author: {post.author}</span>
                            <span> {post.category} </span>
                        </div>
                        <div>Votes: {post.voteScore}</div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Post
