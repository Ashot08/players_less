import classes from "./Player.module.less";
import {PlayerOptions} from "../playerOptions/PlayerOptions";
import {useRef, useState} from "react";
import {useOnClickOutside} from "../PlayersTable";
import {StarRating} from "../starRating/StarRating";
export const Player = (props) => {
    const [modalOpen, setOpenModal] = useState(false);
    const player = useRef();
    useOnClickOutside(player, () => setOpenModal(false));
    return (
        <div ref={player} onClick={()=>setOpenModal(prev => !prev)} className={classes.player}>
            <div className={classes.player_item}>{props.id}</div>
            <div className={classes.player_item}>{props.name}</div>
            <div className={classes.player_item}><StarRating starsCount={props.level} /></div>
            <div className={classes.player_item}>{props.online && '.'}</div>
            {modalOpen && <PlayerOptions data={{id: props.id, name: props.name, level: props.level, online: props.online}}
                                         setPopup={props.setPopup}
                                         addExcludedPlayer={props.addExcludedPlayer} />
            }
        </div>
    )
}

