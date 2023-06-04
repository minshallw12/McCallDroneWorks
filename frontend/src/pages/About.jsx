import Headshot from '../images/headshot.jpg';

export default function About() {
    return (
        <div className="About">
            <div style={{display: 'flex'}}>
                <div className="text_container" style={{ padding: '20px', width: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'center', margin:'10px'}}>
                    <h2 className='padding'>Will Minshall -- UAV Pilot</h2>
                    <p className='padding'>
                        Will is a licensed drone pilot and has 
                        flown several of the most common types 
                        of consumer-commercial drones including 
                        the DJI Phantom 4 Pro, the DJI Mavic 
                        Air, and the DJI Mavic 3.
                    </p>
                    <p className='padding'>
                        Will has a license in real estate and has 
                        helped advertise 100+ properties using his 
                        drones. He loves exploring nature in his 
                        hometown of McCall, fishing in Payette Lake, 
                        and spending time with his family.
                    </p>
                </div>
                <div className="img_container padding">
                    <img src={Headshot} alt="" style={{maxHeight:'500px', maxWidth:'500px', borderRadius:'100%', margin:'10px'}}/>
                </div>
            </div>
            <br/>
            <hr/>
        </div>
    )
}