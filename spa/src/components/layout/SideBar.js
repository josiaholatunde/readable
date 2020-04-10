import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SideBar extends Component {
    render() {
        return (
            <div className='sidebar' style={{ width: '100%', overflow: 'hidden' }}>
                <ul>
                    <li>
                        <i className='fa fa-home' ></i>
                        <Link to='/'>Dashboard</Link>
                    </li>
                    <li>
                        <i className='fa fa-home'></i>
                        <Link to='/categories'>Categories</Link>
                    </li>
                    <li>
                        <i className='fa fa-pencil'></i>
                        <Link to='/categories'>Posts</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar
