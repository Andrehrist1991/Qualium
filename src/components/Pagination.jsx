import React from 'react';
import classNames from 'classnames';

import { Button } from './';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil( totalItems / itemsPerPage ); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                <li className={classNames('pagination__item', {disabled: currentPage === 1})}>
                    <Button 
                        className="pagination__link orange"
                        onClick={() => {
                            if (currentPage > 1){
                                paginate(currentPage - 1);
                            }
                        }}
                    >
                        Prev
                    </Button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={classNames('pagination__item', {disabled: number === currentPage})}>
                        <Button onClick={() => paginate(number)} className={"pagination__link orange"}>{number}</Button>
                    </li>
                ))}
                <li className="pagination__item">
                    <Button 
                        className="pagination__link orange"
                        onClick={() => {
                            if (currentPage <= itemsPerPage){
                                paginate(currentPage + 1);
                            }
                        }}
                    >
                        Next
                    </Button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;
