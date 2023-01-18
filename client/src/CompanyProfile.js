import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Grid} from '@mui/material';
import NumericFormat from 'react-number-format';

function CompanyProfile({ companyProfile }) {

    console.log(companyProfile)

    return (
        <div>
            <Card sx={{ m: 1, width: 800, height: 350, backgroundColor: '#f5f5f5', boxShadow: 'none'}}>
            <h3>Company Profile:</h3>
                <CardContent>
                    <Typography>Industry: {companyProfile.Industry}</Typography>
                    <Typography>Sector: {companyProfile.Sector}</Typography>
                    <Typography>Market Cap: {parseFloat(companyProfile.MarketCapitalization)}</Typography>
                    <Typography>Shares Outstanding: {companyProfile.SharesOutstanding}</Typography>
                    <Typography>Beta: {companyProfile.Beta}</Typography>
                    <Typography>Dividend Date: {companyProfile.DividendDate}</Typography>
                    <Typography>Dividend Per Share: ${parseFloat(companyProfile.DividendPerShare)}</Typography>
                    <Typography>Dividend Yield: {companyProfile.DividendYield}%</Typography>
                    <Typography>EPS: ${companyProfile.EPS}</Typography>
                    <Typography>P/E: ${companyProfile.TrailingPE}</Typography>
                    <Typography>Analyst Price Target: ${companyProfile.AnalystTargetPrice}</Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default CompanyProfile;