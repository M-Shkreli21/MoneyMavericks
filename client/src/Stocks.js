import React, { useState } from 'react';
import CompanyProfile from './CompanyProfile';
import StockQuote from './StockQuote';
import StockCompetitors from './StockCompetitors';
import StockTransactions from './StockTransactions';
import StockReccomendation from './StockReccomendation';
import StockInfo from './StockInfo';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

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

    return (
        <div >
            <h3>Search By Ticker</h3>
            <form onSubmit={handleStockSubmit}>
                <TextField type="text" onChange={handleStockChange} placeholder="Enter a Stock" size="small"/>
                <Button type="submit" value="Search" color="success" size="small" sx={{ m: 0.5, p:0.5, backgroundColor: "none", borderColor: 'black' }} variant='contained'>Search Stock</Button>
            </form>
            <div className='parent'>
                <div className="company_info">
                    <StockInfo stockInfo={stockInfo} />
                </div>
                <div className="company_profile">
                    <CompanyProfile companyProfile={companyProfile} />
                </div>
                <div className="stock_quote">
                    <StockQuote stockQuote={stockQuote} />
                </div>
                <div className="stock_competitors">
                    <StockCompetitors stockPeers={stockPeers} />
                </div>
                <div className="stock_rec">
                <StockReccomendation stockReccomendation={stockReccomendation} />
                </div>
            </div>
        </div>
    )
}

export default Stocks;