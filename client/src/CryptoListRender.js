import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CryptoListRender({ coin }) {

    return (
        <div className="coin_container">
            <Grid container spacing={-1} direction="row" justify="flex-start" alignItems="flex-start">
                <Card sx={{ m: 1, width: 220, height: 225, display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: '#f5f5f5' }}>
                    <CardMedia component="img" height="100" src={coin.icon_url} alt="coin-icon" />
                    <CardContent>
                        <Typography gutterBottom variant="h7" component="div">{coin.name} ({coin.symbol})</Typography>
                        <Typography>Max Supply: {coin.max_supply}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default CryptoListRender;