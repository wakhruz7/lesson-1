import React, { useEffect, useState } from 'react';

const Map = () => {
    const url = "https://dummyjson.com/products";
    const [products, setProducts] = useState([]);

    async function getData() {
        await fetch(url)
            .then((javob) => javob.json())
            .then((tayyorMalumot) => setProducts(tayyorMalumot.products));
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            {products?.map((el) => (
                <div key={el.id}>
                    <h2>{el.title}</h2>
                    <img src={el.thumbnail} alt={el.title} />
                    <b>{el.price}</b>
                </div>
            ))}
        </>
    );
}

export default Map;