import React from 'react';
import { connect } from 'react-redux';
import { getPropertyById } from 'redux/models/PropertiesSaga';
import  wrapper  from '../../redux/store/store'

const ReviewCard = ({ review,user }) => {
  return (

    <div className="p-8 bg-white border rounded shadow-sm" key={review.id}>
      <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
        <a
          className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          aria-label="Category"
        >
          data-add
        </a>
        <span className="text-gray-600">—{review.createdAt}</span>
      </p>
      {/* //feedback */}
      <p className="mb-5 text-gray-700">{review.feedback}</p>
      <div className="flex items-center">
        <a aria-label="Author" title="Author" className="mr-3">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="avatar"
            className="object-cover w-10 h-10 rounded-full shadow-sm"
          />
        </a>
        <div>
          <a
            href="/"
            aria-label="Author"
            title="Author"
            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
          >
          </a>
          <p className="text-sm font-medium leading-4 text-gray-600">
            {
              user && user.firstName
            }
          </p>
        </div>
      </div>
    </div>


  );
};

const mapStateToProps = (state, props) => {
  const users = Object.values(props.users);
  return {
    review: props.review,
    user: users.filter((item: any) => item.id == props.review.userId)[0],
  }
}

export default connect(mapStateToProps)(ReviewCard);