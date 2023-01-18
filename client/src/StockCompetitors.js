import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function StockCompetitors({stockPeers}) {

    console.log(stockPeers)

    return(
        <div>
            <Card sx={{ m: 1, width: 220, height: 325,  backgroundColor: '#f5f5f5', boxShadow: 'none' }}>
            <h3>Top Competitors:</h3>
            <CardContent>
            <Typography>{stockPeers[1]}</Typography>
            <Typography>{stockPeers[2]}</Typography>
            <Typography>{stockPeers[3]}</Typography>
            <Typography>{stockPeers[4]}</Typography>
            <Typography>{stockPeers[5]}</Typography>
            <Typography>{stockPeers[6]}</Typography>
            <Typography>{stockPeers[7]}</Typography>
            <Typography>{stockPeers[8]}</Typography>
            <Typography>{stockPeers[9]}</Typography>
            </CardContent>
            </Card>
        </div>
    )
}

export default StockCompetitors;