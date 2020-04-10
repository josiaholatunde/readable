import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions/postActions'

class PostDetail extends Component {
    componentDidMount() {
        const { fetchPost, match: { params } } = this.props
        fetchPost(params.id)
    }

    render() {
        const { post } = this.props
        return (
            <div className='post-detail' style={{ paddingTop: '3rem' }}>
                <h3 className='ml-3'> {post.title} </h3>
                <p className='ml-3'> Posted on {post.timestamp} in {post.category} </p>
                <div className='col-lg-8'>
                    <div className='card' >
                        <div className='card-body'>
                            <div className='d-flex justify-content-end'>
                                <i className='fa fa-pencil fa-2x text-primary mr-2'></i>
                                <i className='fa fa-times fa-2x text-danger'></i>
                            </div>
                            <p className='card-text' style={{ height: '14rem' }}>
                                {post.body}
                            </p>
                            <hr />
                            <p>Posted by <span>Author: {post.author}</span></p>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <i className='fa fa-thumbs-up fa-2x mr-1'></i>
                                    <span>Liked by  {post.voteScore} people </span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <i className='fa fa-comment fa-2x mr-1'></i>
                                    <span>Comment</span>
                                </div>
                            </div>
                            <div className='comments-list'>
                                {
                                    post.comments && (post.comments.map((comment) => (
                                        <div className='card bg-gray my-3'>
                                            <div className='card-body'>
        
                                                <div className='d-flex justify-content-end'>
                                                    <i className='fa fa-pencil text-primary mr-2'></i>
                                                    <i className='fa fa-times text-danger'></i>
                                                </div>
                                                <span className='text-primary'> {comment.author}</span>
                                                <p className='card-text'>{comment.body}</p>
                                            </div>
                                        </div>
                                    )))
                                }
                            </div>
                            <div className='form-group mt-3 d-flex justify-content-between'>
                                <input type='text' className='form-control mr-1' placeholder='Write a comment' />
                                <button className='btn btn-danger btn-md d-flex align-items-center justify-content-center'>
                                    <i className='fa fa-paper-plane mr-2'></i>
                                    <span>Send</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ posts: { post } }) => ({ post })
export default connect(mapStateToProps, { fetchPost })(PostDetail)
