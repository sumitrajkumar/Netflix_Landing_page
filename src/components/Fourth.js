import React from 'react'
import './Fourth.css';
function Fourth() {
    return (
        <>

            <div className='Fourth_page_main' id="Fourth_page_left">
                <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className='Fourth_page_image' />

                <div className='Fourth_page_lower_part'>
                    <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className='Fourth_page_small_image'/>
                    <div className='Fourth_page_inside_div'>
                        <p className='Fourth_page_margin'>Stranger Things</p>
                        <p className='Fourth_page_downloads'>Downloading...</p>
                    </div>

                </div>
            </div>

            <div className='Fourth_page_main' id="Fourth_page_right">
                <h1 className='Fourth_page_first'><b>Downlaoad your shows to watch offline</b></h1>
                <h4 className='Fourth_page_last'>Save your favourites easily and always have something to watch.</h4>
            </div>
            <p id="neglect">Fourth page</p>
            <div className='Fourth_page_last_content'></div>

        </>
    )
}

export default Fourth
