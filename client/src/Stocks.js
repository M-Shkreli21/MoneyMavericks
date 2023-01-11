import React, {useState} from 'react';

function Stocks() {

    const [stock, setStock] = useState("")

    const handleStockChange = e => setStock(e.target.value)

    function clearForm() {
        setStock("")
    }

    function handleStockSubmit(e) {
        e.preventDefault()
        fetch(`/company_profile?symbol=${stock}`)
        .then(response => response.json())
        .then(data => setStock(data))
        clearForm()
    }

    return(
        <div>
            <form onSubmit={handleStockSubmit}>
                <input type="text" onChange={handleStockChange} placeholder="Enter a Stock" />
                <input type="submit" value="Search"/>
            </form>
            <div className="company_profile">
                <h3>{stock.Name}</h3>
                <h5>{stock.Description}</h5>
                <h5>Ticker: {stock.Symbol}</h5>
                <h5>Sector: {stock.Sector}</h5>
                <h5>Company Beta: {stock.Beta}</h5>
                <h5>Market Cap: {stock.MarketCapitalization}</h5>
                <h5>P/E Ratio: {stock.PERatio}</h5>
                <h5>EPS: ${stock.EPS}</h5>
                <h5>Dividend Date: {stock.DividendDate}</h5>
                <h5>Dividend Per Share: ${stock.DividendPerShare}</h5>
                <h5>Dividend Yield: {stock.DividendYield}%</h5>
                <h5>Shares Outstanding: {stock.SharesOutstanding}</h5>
            </div>
        </div>
    )
}

export default Stocks;