import React, { useState } from 'react';
import CryptoListRender from './CryptoListRender';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

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

    const crypto_render = crypto.map((coin) => {
        return <CryptoListRender key={coin.name} coin={coin} />
    })

    return (
        <div>
            <Box>
                <div className="crypto_info">
                    <form onSubmit={showCrypto} onBlur={searchCrypto} value={cryptoName} className="Crypto_info">
                        <Box>
                            <TextField type="text" placeholder="Enter Crypto Name" />
                            <Button type="submit" value="Search" sx={{ m: 0.5, p: 1, backgroundColor: "none", borderColor: 'white' }} variant='outlined'>Search Crypto</Button>
                        </Box>
                    </form>
                    <Typography>Price: {cryptoName ? cryptoArray[cryptoName].usd : null}</Typography>
                    <Typography>Market Cap: {cryptoName ? cryptoArray[cryptoName].usd_market_cap : null}</Typography>
                    <Typography>24hr Change: {cryptoName ? cryptoArray[cryptoName].usd_24h_change : null}</Typography>
                    <Typography>24hr Volume: {cryptoName ? cryptoArray[cryptoName].usd_24h_vol : null}</Typography>
                </div>
            </Box>
            <br></br>
            <h4>{crypto_render}</h4>
        </div>
    )
}

export default CryptoList;