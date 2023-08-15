import React from "react";
import './cssComponents/ThirdBlock.css'


const ThirdBlock =()=>{



    return(
        <div className="ThirdWrapper">
            <div className="ThirdHeader">
                <p>прогрессировать</p><p>нельзя стагнировать</p>
                <div className="ImgLine"></div>
            </div>
            <div className="Step">шаг 1</div>
            <div className="StepB">через месяц ты заказываешь пиццу без лука, а через три — small talk на встречах и созвонах — твоя стихия</div>
            <div className="Step">шаг 2</div>
            <div className="StepB">ставим цели, а я бегаю рядом с таймером и подбадриваю, чтобы ты не сдался в середине круга</div>
            <div className="Step">шаг 3</div>
            <div className="StepB">практика занимает весь урок, ты всегда используешь изученное здесь и сейчас</div>
            <div className="Step">шаг 4</div>
            <div className="StepB">слушаем реальную речь, обсуждаем сериалы, смотрим видео, разбираем классные фразы и слова</div>
            <div className="Footer">
                <div className="Inside">АНГЛИЙСКИЙ — </div>
                <div className="Outside">ЧТОБЫ ГОВОРИТЬ</div>
            </div>
        </div>
    )
}

export default ThirdBlock