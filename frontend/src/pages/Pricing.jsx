import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Card from "react-bootstrap/Card";
import drone1 from '../images/DJI_0038.jpeg';

export default function Pricing() {
    const [ question, setQuestion ] = useState(1)

    function questionSetter(x) {
        let prompt = ''
        const prompt1 = 'We can get most photos uploaded within 7 calendar days. If you need expedited service please call us.';
        const prompt2 = 'No, we will not fly in the rain. We can fly in light snow, but often these conditions are not optimal for photography.';
        const prompt3 = 'We travel everywhere in Valley County. If you need service in another county, please call us.';
        const prompt4 = "No. We are comfortable finding your property using a typical street address or parcel number. You may be present if you'd like.";
        const prompt5 = "We can typically collect the raw footage in under 30 minutes.";
        const prompt6 = "Yes, if you are not satisfied with your photos we will return to the site for more photos. Retakes are charged a discounted fee.";
        const prompt7 = "We typically use a DJI Phantom 4 for most packages and inspections. This model is outfitted with an HDR camera for exceptional photography. We use smaller drones such as DJI Mavic Air for backcountry work or congested airspace.";
        switch (x) {
            case 1:
                prompt = prompt1;
                break;
            case 2:
                prompt = prompt2;
                break;
            case 3:
                prompt = prompt3;
                break;
            case 4:
                prompt = prompt4;
                break;
            case 5:
                prompt = prompt5;
                break;
            case 6:
                prompt = prompt6;
                break;
            case 7:
                prompt = prompt7;
                break;
        }
        return prompt
    };



    return (
        <div className="Pricing">
          
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{width: '800px'}}>
                    <h1>Pricing Schedule</h1>
                </div>
                <div style={{width: '800px'}}>
                    <p>
                        We realize each project is unique. 
                        We are more than happy to provide 
                        custom quotes for special projects. 
                        We have done many types of projects 
                        including working with municipalities 
                        during floods, inspecting cell phone 
                        towers, and more.
                    </p>
                </div>
            </div>
            <div className="pricing_icons center">
                <Card className="bg-dark text-white" style={{width: '315px', height:'470px', margin:'5px', alignItems:'center'}}>
                    <Card.Img src={drone1} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className="center">STANDARD</Card.Title>
                        <Card.Text className="center">
                            <div style={{display: 'flex', flexDirection:'column'}}>
                                <span>Includes:</span>
                                <span>- One (1) address up to 3 acres</span>
                                <span>- Commercial rights</span>
                                <span>- Five (5) high resolution photos</span>
                                <span>- Travel up to 20 miles</span>
                            </div>
                        </Card.Text>
                        <Card.Text className="center">$199</Card.Text>
                    </Card.ImgOverlay>
                 </Card>
                 <Card className="bg-dark text-white" style={{width: '315px', height:'470px', margin:'5px'}}>
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className="center">PREMIUM</Card.Title>
                        <Card.Text className="center">
                            <div style={{display: 'flex', flexDirection:'column'}}>
                                <span>Includes:</span>
                                <span>- One (1) address up to 3+ acres</span>
                                <span>- Commercial rights</span>
                                <span>- Five (10) high resolution photos</span>
                                <span>- Travel up to 20 miles</span>
                            </div>
                        </Card.Text>
                        <Card.Text className="center">$349</Card.Text>
                    </Card.ImgOverlay>
                 </Card>
                 <Card className="bg-dark text-white" style={{width: '315px', height:'470px', margin:'5px'}}>
                    <Card.Img src="holder.js/100px270" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title className="center">SPECIAL PURPOSE</Card.Title>
                        <Card.Text className="center">
                            <div style={{display: 'flex', flexDirection:'column'}}>
                                <span>- Construction & Development</span>
                                <span>- Agriculture</span>
                                <span>- Events</span>
                                <span>- Civil inspections</span>
                                <span>- Mapping</span>
                            </div>
                        </Card.Text>
                        <Card.Text className="center">CALL FOR PRICE</Card.Text>
                    </Card.ImgOverlay>
                 </Card>
            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <div className="FAQ" style={{background:'rgb(244,244,244)', width:'1100px', margin: '30px', padding: '50px'}}>
                    <h2 className="margin" >Frequently Asked Questions</h2>
                    <div style={{display: 'flex', margin:'10px', justifyContent:'space-between'}}>
                        <div className="questions_container" style={{display: 'flex', flexDirection: 'column'}}>
                            <span className="margin" onClick={() => setQuestion(1)}>What is the turnaround time for a standard package?</span>
                            <span className="margin" onClick={() => setQuestion(2)}>Can the drone fly in bad weather?</span>
                            <span className="margin" onClick={() => setQuestion(3)}>How far will you travel?</span>
                            <span className="margin" onClick={() => setQuestion(4)}>Do I need to be present for the photo shoot?</span>
                            <span className="margin" onClick={() => setQuestion(5)}>How long is each session?</span>
                            <span className="margin" onClick={() => setQuestion(6)}>Can I get retakes?</span>
                            <span className="margin" onClick={() => setQuestion(7)}>Which drones do you fly?</span>
                        </div>
                        <div className="answers_container" style={{width:'500px'}}>
                            {questionSetter(question)}
                        </div>
                </div>
            </div>
            </div>
            <div className="center">
                <hr style={{width: "500px"}}/>
            </div>
            
            <div style={{display: 'flex', flexDirection:'column'}}>
                <div className="center" style={{margin:'50px'}}>
                    <h2>Ready to Begin?</h2>
                </div>
                <div className="center" style={{margin:'50px'}}>
                    <Button variant="outlined">Book a session!</Button>
                </div>
                
            </div>

        </div>
    )
};