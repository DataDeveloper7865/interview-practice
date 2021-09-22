import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

function FetchUseEffect() {
    const [ myData, setMyData ] = useState(0);

    useEffect(function getData() {
         function fetchUser() {
                fetch(`https://jsonplaceholder.typicode.com/posts/2`)
                .then(res => res.json())
                .then(
                    result => {
                        console.log(result);
                        setMyData(result.body)
                    }
                )
        }
        fetchUser()
    })

    return (
        <div>
            MAH DATA FROM FETCH:

            {
                myData
            }
        </div>
    )
}

export default FetchUseEffect;