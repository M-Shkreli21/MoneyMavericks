import React, { useState, useEffect } from 'react';

function FinancialTerms() {

    const [terms, setTerms] = useState([])
    const [toggle, setToggle] = useState(false)
    const [id, setId] = useState(0)

    useEffect(() => {
        fetch("/terms")
        .then(response => response.json())
        .then(data => setTerms(data))
    }, [])

    console.log(terms)
    
    const termArray = terms.map((term) => {

        function handleTerm(){
            setId(term.id)
            setToggle(!toggle)
        }

        return (
            <div className="terms" >
                <h4 onClick={handleTerm}>{term.term_name}</h4>
                <div>
                <p>{term.id === id && toggle ? term.definition : null}</p>
                </div>
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