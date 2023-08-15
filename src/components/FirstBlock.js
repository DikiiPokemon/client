import React from "react";
import "./cssComponents/FirstBlock.css"

const FirstBlock = ({stateRef}) =>{

    const scrollTo =()=> stateRef.current.scrollIntoView()

    return(
        <div className="FirstWrapper">
            <div className="LogoFirst"></div>
            <div className="LogoImg">
                <div className="Img">
                    <div className="MImg"></div>
                    <div className="ImgText">
                        <p>HI THERE!</p>
                        <p>МЕНЯ ЗОВУТ МАКС</p>
                    </div>
                </div>
            </div>
            <div className="Welcome">
                <p>Я — преподаватель английского языка, который поможет тебе</p>
            </div>

            <div className="Pluses">
                <ul>
                    <li>уверенно объяснить коллеге, почему стоит отодвинуть дедлайн</li>
                    <li>подробно объяснить свой опыт во время интервью</li>
                    <li>интересно обсуждать сериалы на созвонах и легко понимать спикеров</li>
                </ul>
            </div>

            <div className="NoteButt" onClick={scrollTo}>
                 
                <div className="Note">записаться</div>
                <div className="NoteSec">на пробное занятие</div>
            </div>
        </div>
    )
}

export default FirstBlock
