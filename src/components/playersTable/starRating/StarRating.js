import star from './star.png';
import classes from './StarRating.module.less'
export const StarRating = (props) => {
    const stars = Array(props.starsCount).fill(<span className={classes.star}><img src={star} alt="star"/></span>)
    return <>
        {stars}
    </>
}