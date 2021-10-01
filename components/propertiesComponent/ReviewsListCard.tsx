import { connect } from "react-redux";
import ReviewCard from "./ReviewCard";

const ReviewsListCard = ({ reviews,users }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {
          reviews.map((review) => (
            <ReviewCard review={review} users={users} key={review.id} />
          ))
        }
      </div>
    </div>
  );
};
const mapStateToProps = (state, {props}) => {
  const reviews = Object.values(props.reviews);

  return {
    reviews: reviews.filter((item: any) => item.propertiId == props.id),
    users: props.users,
  }
}

export default connect(mapStateToProps)(ReviewsListCard)