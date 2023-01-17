import React, {useState} from 'react';
import CompanyProfile from './CompanyProfile';
import StockQuote from './StockQuote';
import StockCompetitors from './StockCompetitors';
import StockTransactions from './StockTransactions';
import StockReccomendation from './StockReccomendation';
import StockInfo from './StockInfo';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';

function Stocks() {

    const [stock, setStock] = useState("")
    const [companyProfile, setCompanyProfile] = useState([])
    const [stockQuote, setStockQuote] = useState([])
    const [stockPeers, setStockPeers] = useState([])
    const [stockTransactions, setStockTransactions] = useState([])
    const [stockReccomendation, setStockReccomendation] = useState([])
    const [stockInfo, setStockInfo] = useState([])

    const handleStockChange = e => setStock(e.target.value)

    function handleStockSubmit(e) {
        e.preventDefault()
        setCompanyProfile([])
        setStockQuote([])
        setStockPeers([])
        setStockTransactions([])
        setStockReccomendation([])
        setStockInfo([])


        fetch(`/company_profile?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setCompanyProfile(data))

        fetch(`/stock_quote?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setStockQuote(data))

        fetch(`/stock_peers?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setStockPeers(data))

        fetch(`/stock_transactions?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setStockTransactions(data))

        fetch(`/stock_recommendations?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setStockReccomendation(data))

        fetch(`/stock_info?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setStockInfo(data))
    }

    return(
        <div>
            <h3>Search By Ticker</h3>
            <form onSubmit={handleStockSubmit}>
                <input type="text" onChange={handleStockChange} placeholder="Enter a Stock" />
                <input type="submit" value="Search"/>
            </form>
            <Grid container spacing={-1}>
            <div className="company_profile">
                <StockInfo stockInfo={stockInfo} />
                <br></br>
                <Box direction="columns" justify="flex-start" alignItems="flex-start">
                <CompanyProfile companyProfile={companyProfile}/>
                <br></br>
                <StockQuote stockQuote={stockQuote} />
                <br></br>
                <StockCompetitors stockPeers={stockPeers}/>
                <br></br>
                </Box>
                <StockReccomendation stockReccomendation={stockReccomendation}/>
            </div>
            </Grid>
        </div>
    )
}

export default Stocks;