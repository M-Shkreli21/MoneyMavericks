import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function FinancialTerms() {

    const [terms, setTerms] = useState([])
    const [toggle, setToggle] = useState(false)
    const [id, setId] = useState(0)

    useEffect(() => {
        fetch("/terms")
            .then(response => response.json())
            .then(data => setTerms(data))
    }, [])

    const termArray = terms.map((term) => {

        function handleTerm() {
            setId(term.id)
            setToggle(!toggle)
        }

        return (
            <div className='terms_container'>
                <Card variant="outlined" sx={{ m: 1, width: 330, height: 175, display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: '#f5f5f5' }}>
                    <CardContent>
                        <Typography sx={{fontWeight: 'bold'}} onClick={handleTerm}>{term.term_name}</Typography>
                        <Typography sx={{fontStyle: 'italic'}}>{term.id === id && toggle ? term.definition : null}</Typography>
                    </CardContent>
                </Card>
            </div>
        )
    })

    return (
        <div>
            <h1>Financial Terms</h1>
            <Grid container spacing={-2} direction="row" justify="flex-start" alignItems="flex-start">
                {termArray}
            </Grid>
        </div>
    )
}

export default FinancialTerms;