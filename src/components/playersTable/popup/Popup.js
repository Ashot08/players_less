import classes from "./Popup.module.less";
import {useRef} from "react";
import {useOnClickOutside} from "../PlayersTable";
import {StarRating} from "../starRating/StarRating";
import {OnlineIndicator} from "../onlineIndicator/OnlineIndicator";

export const Popup = (props) => {
    const popupBody = useRef();
    useOnClickOutside(popupBody, ()=>props.setPopup({open: false, data: {}}))
    return <div className={classes.popup__background}>
        <div ref={popupBody} className={classes.popup__body}>
            <div className={classes.online__info}>{props.data.online ? 'Онлайн' : 'Офлайн'}<OnlineIndicator isActive={props.data.online} /></div>
            <div className={classes.info__body}>
                <div><h2>{props.data.name}</h2></div>
                <div><StarRating starsCount={props.data.level} /></div>
            </div>
            <div className={classes.button__wrapper}><button onClick={()=>props.setPopup({open: false, data: {}})}>Закрыть</button></div>
        </div>
    </div>

}