function CryptoList({crypto}){

    console.log(crypto)

    const crypto_render = crypto.map((coin) => {
        return( 
        <div className="coin_container">
        <img className="coins" src={coin.icon_url} alt="coin-icon" />
        <h4>{coin.name} ({coin.symbol})</h4>
        <h5>Max Supply: {coin.max_supply}</h5>
        </div>
    )})

return(
    <div>
        <h4>{crypto_render}</h4>
    </div>
)}

export default CryptoList;