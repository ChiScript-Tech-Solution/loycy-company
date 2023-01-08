import React, { useState } from 'react';
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BullDozer = ({ data }) => {
    const [projectList] = useState(data.slice(0));
    const [pageNumber, setPageNumber] = useState(0);


    const projectPerPage = 8;
    const pagesVisited = pageNumber * projectPerPage;

    const displayProject = projectList
        .slice(pagesVisited, pagesVisited + projectPerPage)
        .map((item, index) => {
            return (
                <Link to={item.path}>
                    <div key={index} className='justify-center items-center text-center equipment__card'>
                        <LazyLoadImage src={item.img} alt={item.title} />
                        <p className='p-3 loycy-medium loycy-500 text-base'>{item.title}</p>
                    </div>
                </Link>
            );
        });

    const pageCount = Math.ceil(projectList.length / projectPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                {displayProject}
            </div>
            <ReactPaginate
                previousLabel={'Prev'}
                pageCount={pageCount}
                onPageChange={changePage}
                disabledClassName={"paginationDisabled"}
                nextLabel={"Next"}
                containerClassName={"petro__pagination"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                activeClassName={"active"}

            />

        </>
    )
}

export default BullDozer
