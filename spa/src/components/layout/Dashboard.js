import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../../actions/category';
import Post from '../Post';
import { fetchPosts } from '../../actions/postActions';

export class Dashboard extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchCategories())
        dispatch(fetchPosts())
    }
    render() {
        const { categories, posts } = this.props;

        return (
            <div style={{ padding: '1rem' }}>
                <section className='categories'>
                    <h3>
                        Categories
                </h3>
                    <table className='table'>
                        <thead className='thead-light'>
                            <tr>
                                <th scope='col'> # </th>
                                <th scope='col'> Name </th>
                                <th scope='col'> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map((category, index) => (
                                    <tr>
                                        <td> {++index}  </td>
                                        <td> {category.name}  </td>
                                        <td> <Link className='text-primary' to={`/categories/${category.name}`}> View Details  </Link> </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </section>

                <section className='posts w-100'>
                    <div className='d-flex justify-content-between'>
                        <h3 className='my-3'>
                            Posts
                        </h3>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Link className='btn btn-md btn-danger mr-3' to='/posts/add'>
                                <i className='fa fa-plus mr-1'></i>
                                Add Post
                            </Link>
                            <div className='sort-by d-flex align-items-center'>
                                <span className='mr-1'>Sort By:</span>
                                <div class="btn-group">
                                    <button type="button" class="btn bg-primary text-white dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Action
                                </button>
                                    <div class="dropdown-menu">
                                        <button class="dropdown-item" href="#">Vote Score</button>
                                        <button class="dropdown-item" href="#">Date</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-3'>
                        {
                            posts.map(post => (
                                <Post post={post} key={post.id} />
                            ))
                        }
                    </div>

                </section>

            </div>
        )
    }
}

const mapStateToProps = ({ categories, posts }) => ({
    categories: Object.values(categories),
    posts: Object.values(posts)
})

export default connect(mapStateToProps)(Dashboard)
