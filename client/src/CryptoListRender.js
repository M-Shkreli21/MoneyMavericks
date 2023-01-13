import React, {useState} from 'react';

function CryptoListRender({coin}) {

    const [cryptoName, setCryptoName] = useState(coin.name)
    const [cryptoArray, setCryptoArray] = useState([])
    const [toggleCrypto, setToggleCrypto] = useState(false)


    function showCrypto() {
        
        // console.log(cryptoName)
        // setCryptoName(() => setCryptoName(cryptoName))
        // console.log(cryptoName)

        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`)
        .then(response => response.json())
        .then(data => console.log(data))
            
            // setToggleCrypto(!toggleCrypto)
            // setCryptoArray(() => setCryptoArray(data))
            
            console.log(cryptoArray)
            console.log(Object.values(cryptoArray)[0])
        }

    return(
        <div className="coin_container">
        <img className="coins" src={coin.icon_url} alt="coin-icon" />
        <h4 onClick={showCrypto}>{coin.name} ({coin.symbol})</h4>
        <h5>Max Supply: {coin.max_supply}</h5>
        <div className="crypto_info">
            {/* <p>{cryptoName === coin.name && toggleCrypto ? Object.values(cryptoArray)[0].usd : null}</p> */}
        </div>
        </div>
    )
}

export default CryptoListRender;