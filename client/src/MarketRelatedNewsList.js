import React from 'react';

function MarketRelatedNewsList({market_news}) {

    console.log(market_news);

    return(
        <div className="news_container">
            <img className="market_news" src={market_news.image} alt='news' />
            <h7>Source: {market_news.source}</h7>
            <h7>Category: {market_news.category}</h7>
            <h5><a href={market_news.url}>{market_news.headline}</a></h5>
            <h5>{market_news.summary}</h5>
        </div>
    )
}

export default MarketRelatedNewsList;