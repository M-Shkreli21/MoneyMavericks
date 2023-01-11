import React, {useState, useEffect} from 'react';
import CryptoList from './CryptoList.js';

function Crypto() {

    const [cryptoList, setCryptoList] = useState([])

    useEffect(() => {
        fetch('/crypto_list')
        .then(response => response.json())
        .then(data => setCryptoList([data][0].crypto))
    },[])

    console.log(cryptoList)

    const crypto_render = [cryptoList].map((crypto) => {
        return <CryptoList key={Object.keys(crypto)} crypto={Object.values(crypto)}/>
    })


    return(
        <div>
            <h1>Current CryptoCurrency's</h1>
            {crypto_render}
        </div>
    )
}

export default Crypto;