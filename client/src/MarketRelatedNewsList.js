import React from 'react';

function MarketRelatedNewsList({market_news}) {

    console.log(market_news);

    return(
        <div className="news_container">
            <img className="market_news" src={market_news.image}/>
            <h7>Source: {market_news.source}</h7>
            <h7>Category: {market_news.category}</h7>
            <h5>{market_news.headline}</h5>
            <h5>{market_news.summary}</h5>
            <h5>{market_news.url}</h5>
        </div>
    )
}

export default MarketRelatedNewsList;