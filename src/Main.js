//ApiQuery.jsx

import { useEffect, useState } from 'react';

export const ApiQuery = (async) => {
    const API_KEY = process.env.REACT_APP_NEWS;
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        getNews();
    }, []);

    const getNews = () => {
        fetch(API_KEY)
            .then((response) => response.json())
            .then(({articles}) => setNewsList(articles));
    };

    return (
        <div>
            {newsList.map((item, index) => (
                <p key={index}>{item.title}</p>
            ))}
        </div>
    );
};