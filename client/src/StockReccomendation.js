import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function StockReccomendation({ stockReccomendation }) {

    return (
        <div>
            <TableContainer>
            <h3 className="pricing_info">Analyst Recommendations:</h3>
            <Table sx={{ m: 1, width: 1425, height: 175, backgroundColor: '#f5f5f5', boxShadow: 'none', justifyContent: "space-between" }}>
                {/* {mappedStockReccomendation} */}
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={{fontWeight: "bold" }}>Period:</TableCell>
                        <TableCell align="center" sx={{fontWeight: "bold" }}>Buy:</TableCell>
                        <TableCell align="center" sx={{fontWeight: "bold" }}>Hold:</TableCell>
                        <TableCell align="center" sx={{fontWeight: "bold" }}>Sell:</TableCell>
                        <TableCell align="center" sx={{fontWeight: "bold" }}>Strong Buy:</TableCell>
                        <TableCell align="center" sx={{fontWeight: "bold" }}>Strong Sell:</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stockReccomendation?.map((rec) => (
                    <TableRow>
                    <TableCell align="center">{rec.period}</TableCell>
                    <TableCell align="center" sx={{color: 'green'}}>{rec.buy}</TableCell>
                    <TableCell align="center" sx={{color: '#9c9f17'}}>{rec.hold}</TableCell>
                    <TableCell align="center" sx={{color: 'red'}}>{rec.sell}</TableCell>
                    <TableCell align="center" sx={{color: 'green'}}>{rec.strongBuy}</TableCell>
                    <TableCell align="center" sx={{color: 'red'}}>{rec.strongSell}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default StockReccomendation;