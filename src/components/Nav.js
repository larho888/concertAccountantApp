import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ user }) => {
  return (
    <>
        <ul className='wrapper linkStyle'>
            <li><Link to={{pathname:"/", search:`?userid=${user}`}}>Home </Link></li>
            <li><Link to={{pathname:"/SearchResults", search:`?userid=${user}`}}>Search</Link></li>
            <li><Link to={{pathname:"/GetList", search:`?userid=${user}`}}>Public Lists</Link></li>
            <li><Link to={{pathname:"/GetPrivateList", search:`?userid=${user}`}}>Private Lists</Link></li>
      </ul>
    </>
  )
}

export default Nav;