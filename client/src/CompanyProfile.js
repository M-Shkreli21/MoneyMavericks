import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function CompanyProfile({ companyProfile }) {

    console.log(companyProfile)

    return (
        <div>
            <TableContainer>
                <h3 className="pricing_info">Company Profile:</h3>
                <Table size="small" sx={{ m: 1, width: 800, height: 350, backgroundColor: '#f5f5f5', boxShadow: 'none'}}>
                    <TableBody>
                    <TableRow>
                        <TableCell sx={{fontWeight: "bold" }}>Industry: </TableCell>
                        <TableCell align="right">{companyProfile.Industry}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{fontWeight: "bold" }}>Sector:</TableCell>
                        <TableCell align="right">{companyProfile.Sector}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{fontWeight: "bold" }}>Market Cap:</TableCell>
                        <TableCell align="right">{Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(companyProfile.MarketCapitalization)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{fontWeight: "bold" }}>Shares Outstanding:</TableCell>
                        <TableCell align="right">{Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(companyProfile.SharesOutstanding)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{fontWeight: "bold" }}>Beta:</TableCell>
                        <TableCell align="right">{companyProfile.Beta}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{fontWeight: "bold" }}>Dividend Date (YYYY/MM/DD):</TableCell>
                        <TableCell align="right">{companyProfile.DividendDate}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{fontWeight: "bold" }}>Dividend Per Share:</TableCell>
                        <TableCell align="right">{Intl.NumberFormat( 'en-US', {style: 'currency', currency: 'USD' }).format(companyProfile.DividendPerShare)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{fontWeight: "bold" }}>Dividend Yield:</TableCell>
                        <TableCell align="right">{companyProfile.DividendYield}%</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{fontWeight: "bold" }}>EPS:</TableCell>
                        <TableCell align="right">{Intl.NumberFormat( 'en-US', {style: 'currency', currency: 'USD' }).format(companyProfile.EPS)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{fontWeight: "bold" }}>P/E:</TableCell>
                        <TableCell align="right">{Intl.NumberFormat( 'en-US', {style: 'currency', currency: 'USD' }).format(companyProfile.TrailingPE)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{fontWeight: "bold" }}>Analyst Price Target:</TableCell>
                        <TableCell align="right">{Intl.NumberFormat( 'en-US', {style: 'currency', currency: 'USD' }).format(companyProfile.AnalystTargetPrice)}</TableCell>
                    </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CompanyProfile;

{/* <Card sx={{ m: 1, width: 800, height: 350, backgroundColor: '#f5f5f5', boxShadow: 'none'}}>
            <h3>Company Profile:</h3>
                <CardContent>
                    <Typography>Industry: {companyProfile.Industry}</Typography>
                    <Typography>Sector: {companyProfile.Sector}</Typography>
                    <Typography>Market Cap: {companyProfile.MarketCapitalization}</Typography>
                    <Typography>Shares Outstanding: {companyProfile.SharesOutstanding}</Typography>
                    <Typography>Beta: {companyProfile.Beta}</Typography>
                    <Typography>Dividend Date: {companyProfile.DividendDate}</Typography>
                    <Typography>Dividend Per Share: ${parseFloat(companyProfile.DividendPerShare)}</Typography>
                    <Typography>Dividend Yield: {companyProfile.DividendYield}%</Typography>
                    <Typography>EPS: ${companyProfile.EPS}</Typography>
                    <Typography>P/E: ${companyProfile.TrailingPE}</Typography>
                    <Typography>Analyst Price Target: ${companyProfile.AnalystTargetPrice}</Typography>
                </CardContent>
            </Card> */}