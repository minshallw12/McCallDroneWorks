import facebook from '../images/facebook.png';

export default function Footer() {

    function handleClick() {
        window.location.replace("https://www.facebook.com/mccalldrone");
    }

    return (
        <div className="Footer" style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>
            <img onClick={handleClick} src={facebook} alt="" style={{width: '40px', height: '40px'}}/>
            <span>All content Copyright © 2023 McCall Drone Works</span>
            <hr />
        </div>
    )
};