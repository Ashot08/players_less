import classes from "./Player.module.less";
import {PlayerOptions} from "../playerOptions/PlayerOptions";
import {useRef, useState} from "react";
import {useOnClickOutside} from "../PlayersTable";
import {StarRating} from "../starRating/StarRating";
import {OnlineIndicator} from "../onlineIndicator/OnlineIndicator";
export const Player = (props) => {
    const [modalOpen, setOpenModal] = useState(false);
    const player = useRef();
    useOnClickOutside(player, () => setOpenModal(false));
    return (
        <div ref={player} onClick={()=>setOpenModal(prev => !prev)} className={classes.player}>
            <div className={classes.player_item}>{props.id}</div>
            <div title={props.name} className={classes.player_item}>{props.name}</div>
            <div className={classes.player_item}><StarRating starsCount={props.level} /></div>
            <div className={classes.player_item}><OnlineIndicator isActive={props.online} /></div>
            {modalOpen && <PlayerOptions data={{id: props.id, name: props.name, level: props.level, online: props.online}}
                                         setPopup={props.setPopup}
                                         addExcludedPlayer={props.addExcludedPlayer} />
            }
        </div>
    )
}

