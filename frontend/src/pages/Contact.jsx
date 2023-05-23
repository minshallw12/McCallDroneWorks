import * as React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {

    return (
        <div className="Contact">
            <div style={{display: 'flex', justifyContent:'center', alignItems:'center', height: '550px', border: '2px dotted black'}}>
                <h1>Contact Us</h1>
            </div>
            <div style={{display: 'flex', justifyContent:'center', margin: '20px'}}>
                <div style={{ display: 'flex', flexDirection:'column', width: '700px', padding: '20px'}}>
                    <div style={{padding: '10px'}}>
                        <h2>Let's Work Together</h2>
                    </div>
                    <div style={{padding: '10px', paddingTop:'30px'}}>
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
                <ContactForm/>
            </div>

        </div>
    )
}