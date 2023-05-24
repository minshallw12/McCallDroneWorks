import home1 from '../images/home1.jpg';
import lake from '../images/lakenorth2.jpeg';
import dji from '../images/DJI_0132.jpeg';

export default function Home() {
    return (
        <div className="Home">
            <div className="center">
                <img src={home1} alt="" style={{width: '900px', height:'650px'}}/>
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
                    <img src={lake} alt="" style={{width: '500px', height:'400px'}}/>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <img src={dji} alt="" style={{width: '450px', height:'500px', padding:'17px'}}/>
                <img src="" alt="" style={{width: '450px', height:'500px', padding:'17px'}}/>
            </div>
            <div style={{height:'300px'}}>

            </div>
        </div>
    )
}