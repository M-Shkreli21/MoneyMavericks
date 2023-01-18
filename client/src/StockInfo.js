import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function StockInfo({ stockInfo }) {

    console.log(stockInfo);

    return (
        <div>
            <Card sx={{ m: 1, width: 1425, height: 200, display: "flex", flexDirection: "row", boxShadow: 'none', backgroundColor: '#f5f5f5'  }}>
                <Card className="stock_logo" sx={{m: 1, width: 210, height: 200, position: "left", backgroundColor: '#f5f5f5'}}>
                    <CardContent>
                        <CardMedia component="img" height="150" src={stockInfo.logo} alt="logo" sx={{ objectFit: "contain" }} />
                    </CardContent>
                </Card>
                <TableContainer>
                    <Table size="small">
                        <TableRow>
                            <TableCell>Company Name:</TableCell>
                            <TableCell align="right">{stockInfo.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Company Ticker:</TableCell>
                            <TableCell align="right">{stockInfo.ticker}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Company Website</TableCell>
                            <TableCell align="right"><a href={stockInfo.weburl}>{stockInfo.weburl}</a></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Home Country</TableCell>
                            <TableCell align="right">{stockInfo.country}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Market Exchange</TableCell>
                            <TableCell align="right">{stockInfo.exchange}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>IPO Date (YYYY/MM/DD)</TableCell>
                            <TableCell align="right">{stockInfo.ipo}</TableCell>
                        </TableRow>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}

export default StockInfo;

{/* <Card className="company_info" sx={{m: 0.8, width: 1500, height: 210, position: "right", backgroundColor: '#f5f5f5'}}>
                    <CardContent>
                        <Typography>Company Name: {stockInfo.name}</Typography>
                        <Typography>Company Ticker: {stockInfo.ticker}</Typography>
                        <Typography>URL:<a href={stockInfo.weburl}>{stockInfo.weburl}</a></Typography>
                        <Typography>Home Country: {stockInfo.country}</Typography>
                        <Typography>Exchange: {stockInfo.exchange}</Typography>
                        <Typography>IPO Date: {stockInfo.ipo}</Typography>
                    </CardContent>
                </Card> */}