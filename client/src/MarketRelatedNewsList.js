import { Typography } from '@mui/material';
import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function MarketRelatedNewsList({ market_news }) {

    console.log(market_news);

    return (
        <div>
            <Grid container spacing={-2} direction="column" justify="flex-start" alignItems="flex-start">
                <Card className="market_news" variant="outlined" sx={{m:1.5 , height: 400, display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: '#f5f5f5' }}>
                    <CardMedia component="img" height="275" src={market_news.image} alt='news' />
                    <CardContent>
                        <Typography variant="h5"><a href={market_news.url}>{market_news.headline}</a></Typography>
                        <Typography variant="h7">Summary: {market_news.summary}</Typography>
                        <Typography>Source: {market_news.source}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default MarketRelatedNewsList;