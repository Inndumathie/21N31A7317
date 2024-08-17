// src/pages/AllProducts.js
import React, { useEffect, useState } from 'react';
import { getTopProducts } from '../services/api';
import ProductList from '../components/ProductList';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getTopProducts('AM', 'Laptop', 10, 1, 10000); // Example: Top 10 laptops on AMZ between $1 and $10,000
                setProducts(products);
            } catch (error) {
                setError('Failed to fetch products');
            }
        };

        fetchProducts();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return <ProductList products={products} />;
};

export default AllProducts;