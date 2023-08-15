import React from "react";
import './cssComponents/SixthBlock.css'



const SixthBlock =()=>{


    return(
        <div className="SixWrapper">
            <div className="SixHeader">КАЗНА ПУСТЕЕТ, МИЛОРД, НУЖНО БОЛЬШЕ ЗОЛОТА</div>
            <div className="Price"> 
                <div className="PlanOption">ХОЧУ ЗАНИМАТЬСЯ ОДИН</div>
                <div className="PlanPlus">
                    <ul>
                        <li>50 минут урока</li>
                        <li>Много практики языка и обсуждений</li>
                        <li>Регулярные домашние задания</li>
                        <li>Обратная связь и треккинг прогресса</li>
                    </ul>
                </div>
                <div className="PriceWrap">
                    <div className="PlanPrice">1300 ₽/ 15 $</div>
                </div>
                
            </div>
            <div className="Price"> 
                <div className="PlanOption">БУДУ ЗАНИМАТЬСЯ В ГРУППЕ</div>
                <div className="PlanPlus">
                    <ul>
                        <li>50 минут урока</li>
                        <li>Много языковой практики</li>
                        <li>Регулярные домашние задания</li>
                        <li>Обратная связь, треккинг прогресса и повторение материала</li>
                        <li>Чат с группой</li>
                    </ul>
                </div>
                <div className="PriceWrap">
                    <div className="PlanPrice">900 ₽/ 10 $</div>
                </div>
                
            </div>
            <div className="Price"> 
                <div className="PlanOption">НУЖНО ПРОБНОЕ ЗАНЯТИЕ</div>
                <div className="PlanPlus">
                    <ul>
                        <li>50 минут урока</li>
                        <li>Знакомство</li>
                        <li>Определение уровня знаний</li>
                        <li>Постановка целей и построение плана занятий</li>
                        <li>Начало практики языка уже на первом занятии</li>
                    </ul>
                </div>
                <div className="PriceWrap">
                    <div className="PlanPrice">500 ₽</div>
                </div>
            </div>
        </div>
    )
}

export default SixthBlock