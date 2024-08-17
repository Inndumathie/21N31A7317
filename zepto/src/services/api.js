// src/services/api.js

const BASE_URL = 'http://20.244.56.144/test';

export const getTopProducts = async (companyName, categoryName, topN, minPrice, maxPrice) => {
    const url = `${BASE_URL}/companies/${companyName}/categories/${categoryName}/products/top:${topN}?minPrice=${minPrice}&maxPrice=${maxPrice}`;
    
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};