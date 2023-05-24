import React from 'react';
import '../../App.css'
function Pagination({handleNext, handlePrev, page}) {
    return (
        <div className='pagination'>
            <button onClick={handlePrev}>Prev</button>
            <p>{page}</p>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}
export  default  Pagination