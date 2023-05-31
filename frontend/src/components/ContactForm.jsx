import { RadioGroup, FormControlLabel, Radio, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    // hooks
    const [who, setWho] = useState('');
    const [sent, setSent] = useState(false)
    console.log(sent)
    const form = useRef();

    // helper functions
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6sn550g', 'template_9fi8gdd', form.current, '0LAerDSdS88vmIQVZ')
        .then((result) => {
            console.log(result.text);
            setSent(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    const handleChange = (event) => {
        setWho(event.target.value)
    }

    // rendering
    return (
        <div style={{display: 'flex', width: '700px', justifyContent: 'center', padding: '20px'}}>
            {
                sent ? <div style={{height:'600px', display:'flex', justifyContent:'center', alignItems:'center'}}><h1>Your message has been sent!</h1></div> :
            
                <form ref={form} onSubmit={sendEmail} style={{display: 'flex', flexDirection:'column', padding:'5px'}}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Your name"
                        name='name'
                        style={{padding:'10px'}}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        type='email'
                        label="Email"
                        name='email'
                        style={{padding:'10px'}}
                    />
                    <InputLabel>What type of session are you looking for?</InputLabel>
                    <RadioGroup
                        required
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="session"
                        style={{padding:'10px'}}
                    >
                        <FormControlLabel value="Standard (5) photos" control={<Radio />} label="Standard - Five (5) high-resolution photos" />
                        <FormControlLabel value="Premium (10) photos" control={<Radio />} label="Premium - Ten (10) high-resolution photos" />
                        <FormControlLabel value="Special Purpose" control={<Radio />} label="Special Purpose" />
                    </RadioGroup>
                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel>How did you hear about us?</InputLabel>
                        <Select
                            required
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            name='who'
                            value={who}
                            onChange={handleChange}
                        >
                            <MenuItem value='Facebook'>Facebook</MenuItem>
                            <MenuItem value='Google Search'>Google Search</MenuItem>
                            <MenuItem value='From a friend'>From a friend</MenuItem>
                            <MenuItem value='Other'>Other</MenuItem>
                        </Select>
                    </FormControl>
                    <InputLabel>How can we help you?</InputLabel>
                    <TextField
                        required
                        id="outlined-multiline-static"
                        name='message'
                        label="Message"
                        rows={4}
                        style={{padding:'10px'}}
                    />
                    <Button variant="contained" endIcon={<SendIcon />} style={{margin:'10px'}} type='submit'>
                        Send Message  
                    </Button>
                </form>
            }
        </div>
    )
}