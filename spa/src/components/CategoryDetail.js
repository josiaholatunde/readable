import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategoryDetail } from '../actions/category'
import Post from './Post'

class CategoryDetail extends Component {
    componentDidMount() {
        const { fetchCategoryDetail, match: { params } } = this.props
        fetchCategoryDetail(params.id)
    }
    render() {
        const { posts } = this.props
        return (
            <div className='category-posts' style={{ paddingTop: '2rem', paddingLeft: '5rem'}}>
                <h3>Posts within category { posts && posts[0].category }</h3>
                <div className='row mt-3'>
                    {
                     posts &&   posts.map(post => (
                            <Post post={post} key={post.id} />
                        ))
                    }
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({ categories: { category } }) => ({
    posts: category.posts
})
export default connect(mapStateToProps, { fetchCategoryDetail })(CategoryDetail);
