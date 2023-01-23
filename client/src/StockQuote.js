import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

function StockQuote({ stockQuote }) {


    return (
        <div>
            <TableContainer>
            <h3 className="pricing_info">Pricing Information:</h3>
            <Table sx={{ m: 1, backgroundColor: '#f5f5f5', boxShadow: 'none' }}>
            <TableBody>
                <TableRow>
                    <TableCell sx={{fontWeight: "bold" }}>Most Recent Quote: </TableCell>
                    <TableCell>{Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(stockQuote.c)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{fontWeight: "bold" }}>Change in Price:</TableCell>
                    <TableCell sx={{ color: (stockQuote.d) > 0 ? 'green' : 'red'}}>{Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(stockQuote.d)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{fontWeight: "bold" }}>Change in Price Percentage:</TableCell>
                    <TableCell sx={{ color: (stockQuote.dp) > 0 ? 'green' : 'red'}}>{Intl.NumberFormat({ style: 'decimal' }).format(stockQuote.dp)}%</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{fontWeight: "bold" }}>Daily High:</TableCell>
                    <TableCell>{Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(stockQuote.h)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{fontWeight: "bold" }}>Daily Low:</TableCell>
                    <TableCell>{Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(stockQuote.l)}</TableCell>
                </TableRow>
            </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default StockQuote;