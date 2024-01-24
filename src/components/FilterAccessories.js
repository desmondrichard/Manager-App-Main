import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function FilterAccessories() {

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '20ch' },
                }}
                noValidate
                autoComplete="off"
            ></Box>

            <TextField style={{zIndex:'0'}} id="filled-basic" label="Filter" variant="filled" placeholder='EX:Admin'/>
        </div>
    )
}

export default FilterAccessories