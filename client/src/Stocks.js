import React, {useState} from 'react';
import StockList from './StockList';

function Stocks() {

    const [stock, setStock] = useState("")
    const [company, setCompany] = useState([])

    const handleStockChange = e => setStock(e.target.value)

    // function clearForm() {
    //     setStock("")
    // }

    const stockArray = []
    const company_profile = []
    const stock_quote = []
    const stock_peers = []
    const stock_transactions = []
    const stock_recommendations = []
    const stock_info = []

    function handleStockSubmit(e) {
        e.preventDefault()
        setCompany([])
        fetch(`/company_profile?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setCompany((profile) => [...profile, data]))

        fetch(`/stock_quote?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setCompany((company) => [...company, data]))

        fetch(`/stock_peers?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setCompany((company) => [...company, data]))

        fetch(`/stock_transactions?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setCompany((company) => [...company, data]))

        fetch(`/stock_recommendations?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setCompany((company) => [...company, data]))

        fetch(`/stock_info?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setCompany((company) => [...company, data]))

        // stockArray.push(company_profile, stock_quote, stock_transactions, stock_recommendations, stock_peers, stock_info)

        // setCompany(stockArray)
    }

    console.log(company)

    const mappedStocks = company?.map((stocks) => {
        return <StockList key={stocks.id} stocks={stocks} />
    })



    return(
        <div>
            <form onSubmit={handleStockSubmit}>
                <input type="text" onChange={handleStockChange} placeholder="Enter a Stock" />
                <input type="submit" value="Search"/>
            </form>
            <div className="company_profile">
                {/* <h3>{stock.Name}</h3>
                <h5>{stock.Description}</h5>
                <h5>Ticker: {stock.c}</h5>
                <h5>Sector: {stock.Sector}</h5>
                <h5>Company Beta: {stock.Beta}</h5>
                <h5>Market Cap: {stock.MarketCapitalization}</h5>
                <h5>P/E Ratio: {stock.PERatio}</h5>
                <h5>EPS: ${stock.EPS}</h5>
                <h5>Dividend Date: {stock.DividendDate}</h5>
                <h5>Dividend Per Share: ${stock.DividendPerShare}</h5>
                <h5>Dividend Yield: {stock.DividendYield}%</h5>
                <h5>Shares Outstanding: {stock.SharesOutstanding}</h5> */}
                {mappedStocks}
            </div>
        </div>
    )
}

export default Stocks;