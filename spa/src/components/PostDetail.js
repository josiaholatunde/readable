import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, updatePost, deletePost, deleteComment } from '../actions/postActions'
import { withRouter } from 'react-router-dom'
import  moment  from 'moment'
class PostDetail extends Component {

    state = {
        comment: '',
        commentForm: 'create'
    }
    constructor(props) {
        super(props)
        this.commentInput = React.createRef();
    }
    componentDidMount() {
        const { fetchPost, match: { params } } = this.props
        fetchPost(params.id)
    }

    upVote = () => {
        const { post, updatePost } = this.props;
        updatePost({ id: post.id, option: 'upVote'})
    }
    focusOnComment = () => {
        this.commentInput.current.focus()
        this.setState({
            commentForm: 'create',
            comment: ''
        })
    }

    handleInputChange = ({ target: { name, value }}) => this.setState({[name]: value})

    handleDeletePost = () => {
        if (window.confirm('Are you sure you want to delete this post ?')) {
            const { post, history} = this.props
            deletePost(post.id, history)
        }
    }

    handleEditComment(comment) {
        
        this.setState({
            commentForm: 'edit',
            comment: comment.body
        })
    }

    handleDeleteComment(commentId) {
        if (window.confirm('Are you sure you want to delete this comment ?')) {
            const { post, history} = this.props
            deleteComment(post.id, commentId, history)
        }
    }

    handleAddComment = () => {
        const { comment, commentForm } = this.state
        if (commentForm === 'create') {

        } else {

        }
    }


    render() {
        const { post, history } = this.props
        const { comment, commentForm } = this.state
        return (
            <div className='post-detail' style={{ paddingTop: '3rem' }}>
                <h3 className='ml-3'> {post.title} </h3>
                <p className='ml-3'> Posted on { moment.unix(post.timestamp).format('MMMM Do YYYY, h:mm:ss a')} in {post.category} </p>
                <div className='col-lg-8'>
                    <div className='card' >
                        <div className='card-body'>
                            <div className='d-flex justify-content-end'>
                                <i className='fa fa-pencil fa-2x text-primary pointer mr-2' onClick={() => history.push(`/posts/${post.id}/edit`)}></i>
                                <i className='fa fa-times fa-2x text-danger pointer' onClick={this.handleDeletePost}></i>
                            </div>
                            <p className='card-text' style={{ height: '14rem' }}>
                                {post.body}
                            </p>
                            <hr />
                            <p>Posted by <span>Author: {post.author}</span></p>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <i className='fa fa-thumbs-up fa-2x mr-1' onClick={this.upVote}></i>
                                    <span> {post.voteScore} people </span>
                                </div>
                                <div className='d-flex align-items-center pointer' onClick={this.focusOnComment}>
                                    <i className='fa fa-comment fa-2x mr-1'></i>
                                    <span>Comment</span>
                                </div>
                            </div>
                            <div className='mt-3'> { post.comments && post.comments.length } comments to display </div>
                            <div className='comments-list'>
                                {
                                    post.comments && (post.comments.map((comment) => (
                                        <div className='card bg-gray my-3' key={comment.id}>
                                            <div className='card-body'>
        
                                                <div className='d-flex justify-content-end'>
                                                    <i className='fa fa-pencil text-primary pointer mr-2' onClick={() => this.handleEditComment(comment)}></i>
                                                    <i className='fa fa-times text-danger pointer' onClick={() =>this.handleDeleteComment(comment.id)}></i>
                                                </div>
                                                <span className='text-primary'> {comment.author}</span>
                                                <p className='card-text'>{comment.body}</p>
                                            </div>
                                        </div>
                                    )))
                                }
                            </div>
                            <div className='form-group mt-3 d-flex justify-content-between'>
                                <input type='text' className='form-control mr-1' name='comment' ref={this.commentInput} onChange={this.handleInputChange} value={comment} placeholder='Write a comment' />
                                <button disabled={!comment || comment.trim().length === 0} className='btn btn-danger btn-md d-flex align-items-center justify-content-center' onClick={this.handleAddComment}>
                                    <i className='fa fa-paper-plane mr-2'></i>
                                    <span> { commentForm === 'create' ? 'Send': 'Edit'} </span>
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
export default connect(mapStateToProps, { fetchPost, updatePost, deletePost, deleteComment })(
    withRouter(PostDetail))
