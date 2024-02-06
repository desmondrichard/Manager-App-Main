import React from 'react';
import './HeaderSponsors.css';
import HerbaImage from 'react-bootstrap/Image';
import CeatImage from 'react-bootstrap/Image';
import ZomatoImage from 'react-bootstrap/Image';
import KentImage from 'react-bootstrap/Image';
import BbImage from 'react-bootstrap/Image';
import TataImage from 'react-bootstrap/Image';
import UpstoxImage from 'react-bootstrap/Image';
import HotstarImage from 'react-bootstrap/Image';

function HeaderSponsors() {
    return (
        <div className='mainBody'>
            <div className='slider'>
                <div className='slide-track'>
                    <div className='slide'>
                        <HerbaImage src={require('./../assets/Sponsors/Herbalife-Emblem.png')} width="250" height="60"></HerbaImage>
                    </div>
                    <div className='slide'>
                        <CeatImage src={require('./../assets/Sponsors/ceat.png')} width="250" height="60"></CeatImage>
                    </div>
                    <div className='slide'>
                        <KentImage src={require('./../assets/Sponsors/JSW.png')} width="250" height="60" style={{ marginLeft: '50px' }}></KentImage>
                    </div>
                    <div className='slide'>
                        <BbImage src={require('./../assets/Sponsors/bb.png')} width="250" height="60" style={{ marginLeft: '70px' }}></BbImage>
                    </div>
                    <div className='slide'>
                        <TataImage src={require('./../assets/Sponsors/Tata-Motors-Logo.png')} width="250" height="60" style={{ marginLeft: '70px' }}></TataImage>
                    </div>
                    <div className='slide'>
                        <UpstoxImage src={require('./../assets/Sponsors/upstoxlogo.png')} width="250" height="60" style={{ marginLeft: '70px' }}></UpstoxImage>
                    </div>
                    <div className='slide'>
                        <ZomatoImage src={require('./../assets/Sponsors/Zomato-logo.png')} width="250" height="60" style={{ marginLeft: '105px' }}></ZomatoImage>
                    </div>
                    <div className='slide'>
                        <HotstarImage src={require('./../assets/star_sports_logo.png')} width="250" height="60" style={{ marginLeft: '95px' }}></HotstarImage>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderSponsors