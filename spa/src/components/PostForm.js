import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions/postActions'
class PostForm extends Component {
    state = {
        title: '',
        body: ''
    }

    handleInputChange = ({ target: { name, value } }) => this.setState({ [name]: value })

    handleSubmit = (e) => {
        e.preventDefault()
        const { addPost } = this.props
        const { title, body, author, category } = this.state
        const postBody = {
            title,
            body,
            author,
            timestamp: Date.now(),
            category,
            voteScore: 1,
        }
        addPost(postBody)
    }
    render() {
        const { title, body, author, category } = this.state
        const { categories } = this.props
        return (
            <div className='post-form'>
                <div className='row'>
                    <div className='col-lg-7'>
                        <h3>Add Post</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor='title'>Title</label>
                                <input type='text' name='title' id='title' value={title} className='form-control' onChange={this.handleInputChange} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='body'>Body</label>
                                <textarea type='text' name='body' id='body' value={body} rows='12' className='form-control' onChange={this.handleInputChange} >
                                </textarea>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='author'>Author</label>
                                <input type='text' name='author' value={author} className='form-control' onChange={this.handleInputChange} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='category'>Category</label>
                                <select name='title' value={category} className='form-control' onChange={this.handleInputChange} >
                                    <option selected value=''>Select the post category</option>
                                    {
                                        categories && categories.map(category => (
                                            <option value={category.name}> { category.name } </option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='form-group'>
                                <input type='submit' value='Submit' className='d-block btn bg-primary text-white form-control' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ categories: { categories }}) => ({
    categories
})
export default connect(mapStateToProps, { addPost })(PostForm)
