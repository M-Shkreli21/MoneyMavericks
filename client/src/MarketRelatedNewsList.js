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
                <Card variant="outlined" sx={{m:1 , width: 1425, height: 250, display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: '#f5f5f5' }}>
                    <CardMedia component="img" height="140" src={market_news.image} alt='news' />
                    <CardContent>
                        <Typography><a href={market_news.url}>{market_news.headline}</a></Typography>
                        <Typography>Summary: {market_news.summary}</Typography>
                        <Typography>Source: {market_news.source}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default MarketRelatedNewsList;