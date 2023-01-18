import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function StockQuote({ stockQuote }) {

    console.log(stockQuote)

    return (
        <div>
            <TableContainer>
            <h3 className="pricing_info">Pricing Information:</h3>
            <Table sx={{ m: 1, width: 260, height: 175, backgroundColor: '#f5f5f5', boxShadow: 'none' }}>
            <TableBody>
                <TableRow>
                    <TableCell sx={{fontWeight: "bold" }}>Most Recent Quote: </TableCell>
                    <TableCell>${stockQuote.c}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{fontWeight: "bold" }}>Daily High:</TableCell>
                    <TableCell>${stockQuote.h}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell sx={{fontWeight: "bold" }}>Daily Low:</TableCell>
                    <TableCell>${stockQuote.l}</TableCell>
                </TableRow>
            </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default StockQuote;