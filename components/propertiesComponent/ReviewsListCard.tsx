import { connect } from "react-redux";
import { getPropertyById } from "redux/models/PropertiesSaga";
import { wrapper } from '../../redux/store/store'
import ReviewCard from "./ReviewCard";

const ReviewsCard = ({props}) => {
    const { reviews } = props;

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {
            reviews.map((review) => (

              <ReviewCard props={props}  key={review.id} />

              // <div className="p-8 bg-white border rounded shadow-sm" key={review.id}>
              //   <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              //     <a
              //       className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              //       aria-label="Category"
              //     >
              //       data-add
              //     </a>
              //     <span className="text-gray-600">—{review.createdAt}</span>
              //   </p>
              //   {/* //feedback */}
              //   <p className="mb-5 text-gray-700">{review.feedback}</p>
              //   <div className="flex items-center">
              //     <a aria-label="Author" title="Author" className="mr-3">
              //       <img
              //         src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              //         alt="avatar"
              //         className="object-cover w-10 h-10 rounded-full shadow-sm"
              //       />
              //     </a>
              //     <div>
              //       <a
              //         href="/"
              //         aria-label="Author"
              //         title="Author"
              //         className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
              //       >
              //       </a>
              //       <p className="text-sm font-medium leading-4 text-gray-600">
              //         {
              //           review.user && review.user.firstName
              //         }
              //         {console.log("REVIEWWWW",review.user)}
              //       </p>
              //     </div>
              //   </div>
              // </div>
            ))
          }
        </div>
      </div>
    );
};

// @ts-ignore
// ReviewsCard.getInitialProps = wrapper.getInitialAppProps(store => (ctx: any) => {
//     store.dispatch(getPropertyById(ctx.query.id));
  
//     return {
//       id: ctx.query.id,
//     }
  
//   });
  
  const mapStateToProps = (state, props) => {
    const reviews = Object.values(state.entities.reviews);
    return {
      property: state?.entities?.properties[props.id],
      reviews: reviews.filter((item: any) => item.propertiId == props.id),
      // user: state?.entities?.user
    }
  }
  
  export default connect(mapStateToProps)(ReviewsCard)