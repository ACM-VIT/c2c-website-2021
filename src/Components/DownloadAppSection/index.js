import React from 'react'
import mobile_app_svg from '../../assets/mobile_app.svg'
import google_playstore from '../../assets/google_playstore.png';
import apple_playstore from '../../assets/apple_playstore.svg'
import './styles.css'
const DownloadAppSection = () => {
    
    return (
        <article className="da_container">
            <div className="da_links">
                <div className="da_download">
                    <h1>Download our app</h1>
                    <div className="da_linkc">
                        <img id="google_playstore" onClick={()=>{window.open('https://play.google.com/store/apps/details?id=com.acmvit.c2c2021', '_blank');}}src={google_playstore} alt="google_playstore_svg"/>
                        <img id="apple_playstore" onClick={()=>{window.open('https://apps.apple.com/in/app/code2create/id1559338595', '_blank');}} src={apple_playstore} alt="apple_playstore_svg"/>
                    </div>
                </div>
            </div>
            <div className="da_pic">
                <img src={mobile_app_svg} alt="mobile_app_svg"/>
            </div>
        </article>
    )
}

export default DownloadAppSection;
