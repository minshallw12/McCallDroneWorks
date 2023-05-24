import drone from '../images/drone.jpeg';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="Navbar" style={{display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems:'center'}}>
                <img style={{height: '130px', width: '150px'}} src={drone} alt="" />
                <h1>McCall Drone Works</h1>
            </div>
            
            <div style={{display: 'flex', alignItems: 'center', width: '400px', justifyContent: 'space-evenly'}}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/pricing'>Pricing</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
    )
};