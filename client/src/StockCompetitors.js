import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

function StockCompetitors({stockPeers}) {

    console.log(stockPeers)

    return(
        <div>
            <TableContainer>
            <h3 className="pricing_info">Top Competitors:</h3>
            <Table size="small" sx={{ m: 1, width: 220, height: 325,  backgroundColor: '#f5f5f5', boxShadow: 'none' }}>
            <TableBody>
            <TableRow>
                <TableCell>{stockPeers[1]}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>{stockPeers[2]}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>{stockPeers[3]}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>{stockPeers[4]}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>{stockPeers[5]}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>{stockPeers[6]}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>{stockPeers[7]}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>{stockPeers[8]}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>{stockPeers[9]}</TableCell>
            </TableRow>
            </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default StockCompetitors;