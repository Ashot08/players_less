import star from './star.png';
import classes from './StarRating.module.less'
export const StarRating = (props) => {
    const stars = Array(props.starsCount)
        .fill(<img src={star} alt="star"/>)
        .map((s,i)=><span key={i} className={classes.star}>{s}</span>);
    return <>
        {stars}
    </>
}