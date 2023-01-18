// import React from 'react';
// import { Grid } from '@mui/material';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function CryptoListRender({ coin }) {

//     return (
//         <TableContainer className="coin_container">
//             <Table container spacing={-1} direction="row" justify="flex-start" alignItems="flex-start">
//                 <TableHead sx={{ m: 1, width: 220, height: 225, display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: '#f5f5f5' }}>
//                     <TableRow>
//                         <TableCell>Crypto Image</TableCell>
//                         <TableCell>Crypto Name</TableCell>
//                         <TableCell>Max Supply</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     <TableCell component="img" height="100" src={coin.icon_url} alt="coin-icon"></TableCell>
//                     <TableCell gutterBottom variant="h7" component="div">{coin.name} ({coin.symbol})</TableCell>
//                     <TableCell>Max Supply: {coin.max_supply}</TableCell>
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     )
// }

// export default CryptoListRender;