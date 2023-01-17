import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function StockReccomendation({ stockReccomendation }) {

    const mappedStockReccomendation = stockReccomendation?.map((rec) => {
        return (
            <div>
                <CardContent>
                    <Typography>Period: {rec.period}</Typography>
                    <Typography>Buy: {rec.buy}</Typography>
                    <Typography>Hold: {rec.hold}</Typography>
                    <Typography>Sell: {rec.sell}</Typography>
                    <Typography>Strong Buy: {rec.strongBuy}</Typography>
                    <Typography>Strong Sell: {rec.strongSell}</Typography>
                    <br></br>
                </CardContent>
            </div>
        )
    })

    return (
        <div>
            <Card sx={{ m: 1, width: 220, height: 1000, display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: '#f5f5f5', boxShadow: 'none' }}>
                <h3>Analyst Recommendations:</h3>
                {mappedStockReccomendation}
            </Card>
        </div>
    )
}

export default StockReccomendation;