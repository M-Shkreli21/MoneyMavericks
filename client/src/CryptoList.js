import React, { useState } from 'react';
import CryptoListRender from './CryptoListRender';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CryptoList({ crypto }) {

    const [cryptoName, setCryptoName] = useState("")
    const [cryptoArray, setCryptoArray] = useState([])

    const searchCrypto = e => setCryptoName(e.target.value)

    function showCrypto(e) {
        e.preventDefault()
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`)
            .then(response => response.json())
            .then(data => setCryptoArray(data))
    }

    return (
        <div>
            <Box>
                <div className="crypto_info">
                    <form onSubmit={showCrypto} onChange={searchCrypto} value={cryptoName} className="Crypto_info">
                        <Box>
                            <TextField type="text" placeholder="Enter Crypto Name" size="small" />
                            <Button type="submit" value="Search" color="success" size="small" sx={{ m: 0.5, p: 0.5, backgroundColor: "none", borderColor: 'white' }} variant='contained'>Search Crypto</Button>
                        </Box>
                    </form>
                    <Typography>Price: {cryptoName ? cryptoArray[cryptoName].usd : null}</Typography>
                    <Typography>Market Cap: {cryptoName ? cryptoArray[cryptoName].usd_market_cap : null}</Typography>
                    <Typography>24hr Change: {cryptoName ? cryptoArray[cryptoName].usd_24h_change : null}</Typography>
                    <Typography>24hr Volume: {cryptoName ? cryptoArray[cryptoName].usd_24h_vol : null}</Typography>
                </div>
            </Box>
            <br></br>
            <div className="crypto_table">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650}} aria-label="simple table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{fontWeight: "bold" }} align="left">Crypto Logo</TableCell>
                                <TableCell sx={{fontWeight: "bold" }} align="center">Crypto Name (Ticker)</TableCell>
                                <TableCell sx={{fontWeight: "bold" }} align="right">Max Supply</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {crypto.map((coin) => (
                                <TableRow key={coin.name}>
                                    <TableCell align="left" component="img" height="50" width="60" src={coin.icon_url} alt="coin-icon"></TableCell>
                                    <TableCell align="center">{coin.name} ({coin.symbol})</TableCell>
                                    <TableCell align="right">{Intl.NumberFormat({style: 'currency', currency: 'USD' }).format(coin.max_supply)} Coins</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default CryptoList;