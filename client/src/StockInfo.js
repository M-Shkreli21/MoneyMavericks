import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function StockInfo({ stockInfo }) {

    console.log(stockInfo);

    return (
        <div>
            <Card sx={{ m: 1, width: 1425, height: 215, display: "flex", flexDirection: "row", boxShadow: 'none' }}>
                <Card className="stock_logo" sx={{m: 1, width: 210, height: 210, position: "left", backgroundColor: '#f5f5f5'}}>
                    <CardContent>
                        <CardMedia component="img" height="200" src={stockInfo.logo} alt="logo" sx={{ objectFit: "contain" }} />
                    </CardContent>
                </Card>
                <Card className="company_info" sx={{m: 0.8, width: 1500, height: 210, position: "right", backgroundColor: '#f5f5f5'}}>
                <h3 className="company_info_header">Company Info:</h3>
                    <CardContent>
                        <Typography>Company Name: {stockInfo.name}</Typography>
                        <Typography>Company Ticker: {stockInfo.ticker}</Typography>
                        <Typography>URL:<a href={stockInfo.weburl}>{stockInfo.weburl}</a></Typography>
                        <Typography>Home Country: {stockInfo.country}</Typography>
                        <Typography>Exchange: {stockInfo.exchange}</Typography>
                        <Typography>IPO Date: {stockInfo.ipo}</Typography>
                    </CardContent>
                </Card>
            </Card>
        </div>
    )
}

export default StockInfo;