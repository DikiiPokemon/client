import React from "react";
import './cssComponents/SecondBlock.css'


const SecondBlock = ()=>{


    return(
        <div className="SecondWrapper">
            <div className="Header">
                <div>нам по пути,</div>
                <div className="GH">если ты хочешь</div>
            </div>
            <div className="FirstBlockBody">свободно говорить на английском и быть уверенным в своих языковых навыках</div>
            <div className="ComplicateBodyBlock">
                <div className="Points">
                    <div className="FirstPoint">понять грамматику и полюбить её за то, какая она логичная, и использовать правила в речи</div>
                    <div className="SecondPoint">нормально объяснять мысли так, чтобы тебя даже понимали</div>
                </div>
                <div className="EndPoint">не прокрастинировать без цели, а с интересом шагать в сторону свободного английского</div>
                <div className="Owl">
                    <div className="OwlImg"></div>
                </div>
            </div>
            <div className="FooterBlock">воспринимать, что говорят знаменитости в оригинале</div>
        </div>
    )
}

export default SecondBlock