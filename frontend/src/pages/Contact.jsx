import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Contact() {
    const [who, setWho] = useState('');

    const handleChange = (event) => {
        setWho(event.target.value)
    }

    return (
        <div className="Contact">
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '550px', border: '2px dotted black'}}>
                <h1>Contact Us</h1>
            </div>
            <div style={{display: 'flex', justifyContent:'center', }}>
                <div style={{ display: 'flex', flexDirection:'column', width: '700px', padding: '20px'}}>
                    <div>
                        <h2>Let's Work Together</h2>
                    </div>
                    <div>
                        <p>
                            We are friendly and 
                            service-oriented. Please 
                            leave us a message and 
                            one of our representatives 
                            will get in contact with 
                            you shortly.
                        </p>
                    </div>
                </div>
                <div style={{display: 'flex', width: '700px', justifyContent: 'center', padding: '20px'}}>
                    <form action="" style={{display: 'flex', flexDirection:'column', padding:'5px'}}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Your name"
                            style={{padding:'10px'}}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Email"
                            style={{padding:'10px'}}
                        />
                        <InputLabel>What type of session are you looking for?</InputLabel>
                        <RadioGroup
                            required
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            style={{padding:'10px'}}
                        >
                            <FormControlLabel value="Standard" control={<Radio />} label="Standard - Five (5) high-resolution photos" />
                            <FormControlLabel value="Premium" control={<Radio />} label="Premium - Ten (10) high-resolution photos" />
                            <FormControlLabel value="Special Purpose" control={<Radio />} label="Special Purpose" />
                        </RadioGroup>
                        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel>How did you hear about us?</InputLabel>
                            <Select
                                required
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={who}
                                onChange={handleChange}
                            >
                                <MenuItem value='Facebook'>Facebook</MenuItem>
                                <MenuItem value='Google Search'>Google Search</MenuItem>
                                <MenuItem value='From a friend'>From a friend</MenuItem>
                                <MenuItem value='Other'>Other</MenuItem>
                            </Select>
                        </FormControl>
                        <InputLabel>How can we help you? *</InputLabel>
                        <TextField
                            required
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={4}
                            style={{padding:'10px'}}
                        />
                        <Button variant="contained" endIcon={<SendIcon />} style={{margin:'10px'}}>
                            Send    
                        </Button>
                    </form>
                </div>
            </div>

        </div>
    )
}