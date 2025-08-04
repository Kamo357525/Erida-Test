import React, {useEffect} from 'react';
import './styles.css'

function Pagination({pagination, setPagination}) {
    const newArray = new Array(pagination.pageCount).fill('');

    const handlerSetPagination = (page) => {
        if (pagination.activePage !== page) {
            setPagination({
                ...pagination,
                activePage: page
            })
        }
    }
    return (
        <div className='paginationBlock'>
            {newArray.length && newArray.length>1?newArray.map((item, i) =>
                <p
                    key={i}
                    className={pagination.activePage === i + 1 ? 'activePagination' : 'pagination'}
                    onClick={() => handlerSetPagination(i + 1)}
                >
                    {i + 1}
                </p>
            ): null}
        </div>
    );
}

export default Pagination;