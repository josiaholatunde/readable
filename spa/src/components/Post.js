import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

const Post = ({ post, history }) => {
    return (
        <Fragment>
            <div className='col-lg-3 pointer' onClick={() => history.push(`/posts/${post.id}`)}>
                <div className='card bg-primary text-white' style={{height: '14rem'}}>
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

export default withRouter(Post)
