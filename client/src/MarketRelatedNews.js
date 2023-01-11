import React, { useState, useEffect } from 'react';
import MarketRelatedNewsList from './MarketRelatedNewsList.js'

function MarketRelatedNews() {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('/stock_news')
        .then(response => response.json())
        .then(data => setNews(data))
    }, [])

    const news_render = news.map((market_news) => {
        return <MarketRelatedNewsList key={market_news.id} market_news={market_news} />
    })

    return(
        <div>
            <h1>Market Related News</h1>
            {news_render}
        </div>
    )
}

export default MarketRelatedNews;