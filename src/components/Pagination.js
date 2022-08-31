import React from 'react'

const Pagination = () => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className='pageItem'>
                    <a href="!#" className='pageLink'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination;