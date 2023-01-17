import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function StockQuote({ stockQuote }) {

    return (
        <div>
            <Card sx={{ m: 1, width: 250, height: 175, display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: '#f5f5f5', boxShadow: 'none' }}>
            <h3>Pricing Information:</h3>
            <CardContent>
                <Typography>Most Recent Quote: ${stockQuote.c}</Typography>
                <Typography>Daily High: ${stockQuote.h}</Typography>
                <Typography>Daily Low: ${stockQuote.l}</Typography>
            </CardContent>
            </Card>
        </div>
    )
}

export default StockQuote;