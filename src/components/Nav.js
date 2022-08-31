import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ user }) => {
    console.log(user)
  return (
    <>
        <ul>
            <li><Link to={{pathname:"/", search:`?userid=${user}`}}>Home </Link></li>
            <li><Link to={{pathname:"/GetList", search:`?userid=${user}`}}> View the Public Lists</Link></li>
            <li><Link to={{pathname:"/GetPrivateList", search:`?userid=${user}`}}> View Your Private Lists</Link></li>
            <li><Link to={{pathname:"/SearchResults", search:`?userid=${user}`}}>Search For An Event</Link></li>
      </ul>
    </>
  )
}

export default Nav;