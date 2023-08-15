import React from "react";
import './cssComponents/FinalBlock.css'


const FinalBlock =({stateRef})=>{


    return(
        <div className="FinalWrapper" ref={stateRef}>
            <div className="FinalHeader">КАК СО МНОЙ СВЯЗАТЬСЯ?</div>
            <a href="https://t.me/study_n_roll" className="FirstHref">telegram</a>
            <a href="https://www.instagram.com/reel/CvXe8kCtFKX/?igshid=MzRlODBiNWFlZA==" className="SecondHref">instagram</a>
            <a href="https://vk.com/bohaterja" className="ThirdHref">vkontakte</a>
            <div className="FooterMax"></div>
        </div>
    )
}

export default FinalBlock