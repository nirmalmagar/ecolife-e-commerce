import React, { useEffect, useState } from 'react'

const ApiCards = () => {
    const [currData, setCurrData] = useState([]);

    const LoadPage = () => {
        // setCurrData(currData + currData);
    }
    const ApiData = async () => {
        try {
            const fetchData = await fetch("https://dummyjson.com/products");
            const response = await fetchData.json();
            const data = response.products;
            setCurrData(data.slice(0, 4));
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    // const slice = data.slice(0,currData);
    useEffect(() => {
        ApiData();
    }, [])
    return (
        <>
            {
                currData.map((value, index) => {
                    return (
                        <div key={index}>
                            <h1>{value.title}</h1>
                        </div>
                    )
                })
            }
            <button onClick={LoadPage}>load more</button>
        </>
    )
}

export default ApiCards