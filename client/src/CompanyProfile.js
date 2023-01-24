import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';


function CompanyProfile({ companyProfile }) {

    return (
        <div>
            <TableContainer>
                <h3 className="pricing_info">Company Profile:</h3>
                <Table size="small" sx={{ m: 1, backgroundColor: '#f5f5f5', boxShadow: 'none'}}>
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
                        <TableCell align="right" sx={{ color: (companyProfile.Beta) < 0 ? 'red' : 'none'}}>{companyProfile.Beta}</TableCell>
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
                        <TableCell align="right" sx={{ color: (companyProfile.EPS) < 0 ? 'red' : 'none'}}>{Intl.NumberFormat( 'en-US', {style: 'currency', currency: 'USD' }).format(companyProfile.EPS)}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell sx={{fontWeight: "bold" }}>P/E:</TableCell>
                        <TableCell align="right" sx={{ color: (companyProfile.TrailingPE) < 0 ? 'red' : 'none'}}>{Intl.NumberFormat( 'en-US', {style: 'currency', currency: 'USD' }).format(companyProfile.TrailingPE)}</TableCell>
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