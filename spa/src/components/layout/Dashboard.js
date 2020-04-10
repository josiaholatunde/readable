import React, { Component } from 'react'
import { MDBDataTable } from 'mdbreact'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategories } from '../../actions/category';
import Post from '../Post';

export class Dashboard extends Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchCategories())
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
                        <thead className='thead-dark'>
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

                <section className='posts'>
                <h3>
                    Posts
                </h3>
                   
                    <div className='row'>
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
