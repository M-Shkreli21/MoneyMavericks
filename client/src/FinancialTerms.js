import React, { useState, useEffect } from 'react';

function FinancialTerms() {

    const [terms, setTerms] = useState([])

    useEffect(() => {
        fetch("/terms")
        .then(response => response.json())
        .then(data => setTerms(data))
    }, [])

    const termArray = terms.map((term) => {
        return (
            <div>
                <h4>{term.term_name}</h4>
                <h5>{term.definition}</h5>
            </div>
        )
    })

    return(
        <div>
            {termArray}
        </div>
    )
}

export default FinancialTerms;