import classes from "../PlayersTable.module.less";
import {SortingButton} from "../sortingButton/SortingButton";

export const TableHead = (props) => {
    return <div className={classes.table__head}>
        <div className={classes.table__head_item}>
            ID
            <SortingButton order={props.currentSort.sortBy==='id' && props.currentSort.order} title={'id'} clickHandler={props.setSortType}/>
        </div>
        <div className={classes.table__head_item}>
            Имя
            <SortingButton order={props.currentSort.sortBy==='name' && props.currentSort.order} currentSort={props.currentSort} title={'name'} clickHandler={props.setSortType}/>
        </div>
        <div className={classes.table__head_item}>
            Уровень
            <SortingButton order={props.currentSort.sortBy==='level' && props.currentSort.order} currentSort={props.currentSort} title={'level'} clickHandler={props.setSortType}/>
        </div>
        <div className={classes.table__head_item}>
            Онлайн
            <SortingButton order={props.currentSort.sortBy==='online' && props.currentSort.order} currentSort={props.currentSort} title={'online'} clickHandler={props.setSortType}/>
        </div>
    </div>
}