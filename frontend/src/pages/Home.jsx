import Carosel from '../components/Carosel';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import lake from '../images/lakenorth2.jpeg';
import drone from '../images/DJI_0132.jpeg';



export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="Home">
            <div className="center">
                <Carosel/>
            </div>
            <div style={{display:'flex', margin: '50px'}}>
                <div style={{display: 'flex', flexDirection:'column'}}>
          
                    <h2 className="padding">Your eyes in the sky.</h2>
                    <p className="padding">
                        We are your aerial photography specialists. 
                        Our fleet of UAV's are commercial grade 
                        and state of the art. Our pilots are licensed 
                        with the FAA and have completed stringent 
                        education and exam requirements.
                    </p>
                    <span className="padding">Our services include:</span>
                    <ul className="padding" style={{paddingLeft:'60px'}}>
                        <li className="padding">Real Estate advertising photos</li>
                        <li className="padding">Real Estate construction photos</li>
                        <li className="padding">Tower inspections</li>
                        <li className="padding">Industrial inspection</li>
                        <li className="padding">Agriculture/ Land mapping</li>
                        <li className="padding">Commercial & Film *COMING SOON*</li>
                    </ul>
                </div>
                <div>
                    <img src={drone} alt="" style={{width: '500px', height:'400px'}}/>
                </div>
            </div>
            <div style={{height:'300px'}}>
                <div className="center" style={{margin:'50px'}}>
                    <Button onClick={()=>navigate('/contact/')}variant="outlined">Book a session!</Button>
                </div>
            </div>
        </div>
    )
}