import drone from '../images/drone.jpeg';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <div className="Navbar" style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems:'center'}}>
                <img style={{height: '130px', width: '150px'}} src={drone} alt="" />
                <h1>McCall Drone Works</h1>
            </div>
            
            <div style={{display: 'flex', alignItems: 'center', width: '400px', justifyContent: 'space-evenly'}}>
                <Button onClick={()=>navigate('/')}>Home</Button>
                <Button onClick={()=>navigate('/about')}>About</Button>
                <Button onClick={()=>navigate('/pricing')}>Pricing</Button>
                <Button onClick={()=>navigate('/contact')}>Contact</Button>
            </div>
        </div>
    )
};