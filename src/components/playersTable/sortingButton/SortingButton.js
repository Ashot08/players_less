import classes from './SortingButton.module.less'
export const SortingButton = (props) =>{
    return <div className={classes.sorting_buttons}>
        <button className={[classes.button_top, props.order==='ASC' ? classes.active : ''].join(' ')} onClick={
            ()=>{props.clickHandler({sortBy: props.title, order: 'ASC'});}
        }> </button>
        <button className={[classes.button_down, props.order==='DESC' ? classes.active : ''].join(' ')} onClick={
            ()=>{props.clickHandler({sortBy: props.title, order: 'DESC'});}
        }> </button>
    </div>
}