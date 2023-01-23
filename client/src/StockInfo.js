import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

function StockInfo({ stockInfo }) {

    console.log(stockInfo);

    return (
        <div>
            <Card sx={{ m: 1, display: "flex", flexDirection: "row", boxShadow: 'none', backgroundColor: '#f5f5f5'  }}>
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