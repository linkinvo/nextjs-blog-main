import PropertiesModalComponents from 'components/PropertiesModalComponents';
import  SiteHeader  from 'components/SiteHeader'
import cookie from 'cookie-cutter';
import { useSelector } from 'react-redux';
import { getSinglePropertyInfo } from 'redux/models/PropertiesSaga';
import { wrapper } from '../../redux/store/store'


export default function Property() { 

  const property = useSelector((state: any) => state.propertiesReducer.property);

  const userReducer = useSelector((state: any) => state.userReducer);

console.log("343434343",property.reviews)



  return (
    <div className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
      <div className='xl:flex-shrink-0'>
        <SiteHeader props={userReducer} />
      </div>
      
{
  property.reviews!==undefined?
  <>
  
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={property.img}
              alt="img"
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            {/* inline-block */}
            <div className='flex items-center px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"'>
              <h5>Title</h5>
            </div>
            <h2 className="mb-3 m-4 text-green-600 text-3xl font-extrabold leading-none sm:text-4xl">
              {property.price}/wk
            </h2>
            <div className='flex'>
              <div className='flex-1 inline-flex items-center'>
                <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"></path>
                </svg>
                {property.beds} beds
              </div>
              <div className='flex-1 inline-flex items-center'>
                <svg className="h-6 w-6 text-gray-600 fill-current mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"></path>
                </svg>{property.baths} baths
              </div>

            </div>
            <p className="mb-10 text-gray-800">
              <span className="font-bold">{property.description}</span>
            </p>
            <div className="flex-1 items-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-2  py-2 mr-6 font-medium tracking-wide text-white bg-indigo-500 hover:bg-indigo-400 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                To order
              </button>
              <PropertiesModalComponents />

            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">

        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {
            property.reviews.map((review) => {
              return <div className="p-8 bg-white border rounded shadow-sm" key={review.id}>
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <a
                  
                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                  >
                    data-add
                  </a>
                  <span className="text-gray-600">—{review.createdAt}</span>
                </p>
                <a
                  
                  aria-label="Article"
                  title="Jingle Bells"
                  className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  title
                </a>

                <p className="mb-5 text-gray-700">{review.feedback}</p>
                <div className="flex items-center">
                  <a  aria-label="Author" title="Author" className="mr-3">
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
                      {review.user.firstName} {review.user.lastName}
                    </p>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </div>
  
  </>:
  <>
   <div className="my-10 flex justify-center  font-bold">
            <h1>There are not any products...</h1>
          </div>
  </>
}
  
    </div>

  );
}


// @ts-ignore
Property.getInitialProps = wrapper.getInitialAppProps(store => (ctx: any) => {
  console.warn(111111111111)
  store.dispatch(getSinglePropertyInfo(ctx.query.id));

}); 

// Property.getInitialProps = async (ctx) => {
//   const res = await fetch(`http://localhost:3000/api/properties/${ctx.query.id}`);
//   const getProperties = await res.json();

//   return {
//     getProperties,
//   }
// }

// Property.getInitialProps = async (ctx) => {
//   // const cookie = ctx.req ? ctx.req.headers.cookie || "" : document.cookie;
//   // const token = cookie.token;
//   // const getProperties = await xRead(`/properties/${ctx.query.id}`, {}, token);
//   return {
//     // getProperties
//     id: ctx.query.id
//   }
// }

