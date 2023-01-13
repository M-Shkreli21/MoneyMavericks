import React from 'react';
import CryptoListRender from './CryptoListRender';

function CryptoList({crypto}){
    
    const crypto_render = crypto.map((coin) => {
        return <CryptoListRender key={coin.name} coin={coin} />
    })
    
    
return(
    <div>
        <h4>{crypto_render}</h4>
    </div>
)}

export default CryptoList;