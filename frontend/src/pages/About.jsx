import Headshot from '../images/headshot.jpg';

export default function About() {
    return (
        <div className="About" style={{display: 'flex'}}>

            <div className="text_container" style={{border: '2px dotted black'}}>
                <h3>Will Minshall -- UAV Pilot</h3>
                <p>
                    Will is a licensed drone pilot and has 
                    flown several of the most common types 
                    of consumer-commercial drones including 
                    the DJI Phantom 4 Pro, the DJI Mavic 
                    Air, and the DJI Mavic 2 Pro.
                </p>
                <p>
                    Will has a license in real estate and has 
                    helped advertise 100+ properties using his 
                    drones. He loves exploring nature in his 
                    hometown of McCall, fishing in Payette Lake, 
                    and spending time with his family.
                </p>
            </div>

            <div className="img_container">
                <img src={Headshot} alt="" style={{maxHeight:'500px', maxWidth:'500px'}}/>
            </div>

        </div>
    )
}