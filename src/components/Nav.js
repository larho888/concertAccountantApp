import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';

const Nav = ({ user, logout }) => {
  return (
    <>
        <div className='wrapper navBar'>
            <h3>User logged in</h3>
            {user?.email}
            <button onClick={logout}>logout</button>
        </div>
        <ul>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/components/GetList"> View the Public Lists</Link></li>
            <li><Link to="/components/GetPrivateList"> View Your Private Lists</Link></li>
            <li><Link to="/components/SearchResults">Search For An Event</Link></li>
      </ul>
    </>
  )
}

export default Nav;