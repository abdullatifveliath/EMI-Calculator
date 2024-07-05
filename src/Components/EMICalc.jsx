import React, { useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function EMICalc() {

    const [amount, setAmount] = useState('')
    const [year, setYear] = useState('')
    const [rate, setRate] = useState('')
    const [outputdisp, setOutputdisp] = useState('0')

    console.log("amount :", amount, ", year :", year, ", rate :", rate);

    const calculate = (e) => {
        let trate = rate / (12 * 100);
        const output = (amount * trate * (((1 + trate) ** (year * 12))) / (((1 + trate) ** (year * 12)) - 1)).toFixed(2);
        console.log("interest :", output);
        setOutputdisp(output);
    }

    return (
        <div className='p-5 m-5'>
            <div className='p-3 m-3'>
                <center>
                    <TextField id="inploanamount" value={amount} onChange={(e) => setAmount(e.target.value)} label="Principal Loan Amount" variant="outlined" /><br /><br />
                    <TextField id="inptenure" value={year} onChange={(e) => setYear(e.target.value)} label="Tenure (Years)" variant="outlined" /><br /><br />
                    <TextField id="inpinterest" value={rate} onChange={(e) => setRate(e.target.value)} label="Interest Rate in %" variant="outlined" /><br /><br />
                    <Button variant="contained" style={{ backgroundColor: 'orange' }} onClick={e => calculate(e)}>Calculate</Button><br /><br />
                    Your Monthly Loan EMI is &#8377; {outputdisp}
                </center>
            </div>
        </div>
    )
}

export default EMICalc