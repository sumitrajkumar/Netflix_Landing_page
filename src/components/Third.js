import React from 'react'
import './Third.css';
function Third() {
    return (
        <>
            <div className='Third_page_main' id="Third_page_left">
                <h1 className='Third_page_first'><b>Enjoy on your TV</b></h1>
                <h4 className='Third_page_last'>Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
            </div>

            <div className='Third_page_main' id="Third_page_right">
                <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="nmhp-card-animation-asset-image" className='Third_page_image' />
                <video src="Third_page_video.mp4" type="video/mp4" className='Third_page_video' autoPlay="" playsInline="" muted="" loop=""></video>
            </div>
            <p id="neglect">Third page</p>
            <div className='Third_page_last_content'></div>
        </>
    )
}

export default Third
