import React from 'react';

function OrderList(props) {


    return (
        <div>
            <ul> 
                {
                    props.books.map((book, idx) => 
                        <li key={idx}> 
                            Title: {book.title}, 
                            Rating: {book.rating},
                            Publish Date: {book.datePub}
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default OrderList;