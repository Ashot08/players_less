import classes from './OnlineIndicator.module.less'
export const OnlineIndicator = (props) => {
    return <>
        <span className={[classes.indicator, props.isActive ? classes.active : ''].join(' ')} />
    </>
}