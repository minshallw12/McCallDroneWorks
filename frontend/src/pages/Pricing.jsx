import { useState, useEffect } from "react";

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
        console.log(prompt)
        return prompt
    }



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
                <img className='margin' src="" alt="" placeholder="standard" style={{width: '315px', height:'470px'}}/>
                <img className='margin' src="" alt="" placeholder="premium" style={{width: '315px', height:'470px'}}/>
                <img className='margin' src="" alt="" placeholder="special purpose" style={{width: '315px', height:'470px'}}/>
            </div>
            <div className="FAQ">
                <h2>Frequently Asked Questions</h2>
                <div style={{display: 'flex'}}>
                    <div className="questions_container" style={{display: 'flex', flexDirection: 'column'}}>
                        <span onClick={() => setQuestion(1)}>What is the turnaround time for a standard package?</span>
                        <span onClick={() => setQuestion(2)}>Can the drone fly in bad weather?</span>
                        <span onClick={() => setQuestion(3)}>How far will you travel?</span>
                        <span onClick={() => setQuestion(4)}>Do I need to be present for the photo shoot?</span>
                        <span onClick={() => setQuestion(5)}>How long is each session?</span>
                        <span onClick={() => setQuestion(6)}>Can I get retakes?</span>
                        <span onClick={() => setQuestion(7)}>Which drones do you fly?</span>
                    </div>
                    <div className="answers_container">
                        {questionSetter(question)}
                    </div>
                </div>
            </div>
            <hr />
            <div style={{display: 'flex', flexDirection:'column'}}>
                <div className="center" style={{margin:'50px'}}>
                    <h2>Ready to Begin?</h2>
                </div>
                <div className="center" style={{margin:'50px'}}>
                    <button>BOOK A SESSION</button>
                </div>
                
            </div>

        </div>
    )
}