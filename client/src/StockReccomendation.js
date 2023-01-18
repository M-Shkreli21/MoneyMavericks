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
                    <TableCell align="center">{rec.buy}</TableCell>
                    <TableCell align="center">{rec.hold}</TableCell>
                    <TableCell align="center">{rec.sell}</TableCell>
                    <TableCell align="center">{rec.strongBuy}</TableCell>
                    <TableCell align="center">{rec.strongSell}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}

export default StockReccomendation;

    // const mappedStockReccomendation = stockReccomendation?.map((rec) => {
    //     return (
    //         <div>
    //             <CardContent>
    //                 <Typography>Period: {rec.period}</Typography>
    //                 <Typography>Buy: {rec.buy}</Typography>
    //                 <Typography>Hold: {rec.hold}</Typography>
    //                 <Typography>Sell: {rec.sell}</Typography>
    //                 <Typography>Strong Buy: {rec.strongBuy}</Typography>
    //                 <Typography>Strong Sell: {rec.strongSell}</Typography>
    //                 <br></br>
    //             </CardContent>
    //         </div>
    //     )
    // })