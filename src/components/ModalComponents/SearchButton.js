import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './SearchButton.css';

function SearchButton() {
    return (
        <div >
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { maxWidth: '28ch' },
                }}
                noValidate
                autoComplete="off"
            ></Box>
            <div>
                <TextField style={{zIndex:'0'}}
                    id="filled-multiline-flexible"
                    label="Search"
                    multiline
                    maxRows={5}
                    variant="filled"
                    placeholder='Ex:Admin'
                    inputProps={{
                        maxLength: 6,
                    }}
                />
            </div>
            
        </div>
    )
}

export default SearchButton