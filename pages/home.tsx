import Link from 'next/link';
import SearchFilters from 'components/SearchFilters';
import { xRead } from 'src/request';
import SiteHeader from '../components/SiteHeader';
import Layout from '../components/Layout'
import { HTTP_METHOD } from 'src/common';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesInfo } from 'redux/store/actions';



export default function Home() {

  const dispatch = useDispatch();
  const properties = useSelector((state: any) => state.propertiesReducer.properties);
  const userReducer = useSelector((state: any) => state.userReducer);
  console.log("PROPERTY",properties )
  if (properties.length === 0) { dispatch(getPropertiesInfo()); return (<div>loading...</div>) }
//   if (getProperties.error) return <div>{getProperties.message}</div>



  return (
    <Layout props={userReducer}>
    <div className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
      <div className='xl:flex-1 xl:flex '>
        <main className='mt-6 xl:flex-1 xl:overflow-y-scroll'>
          <div className='px-4 xl:px-8'>
            <h3 className='text-gray-900 text-xl'>Los Angeles</h3>
            <p className='text-gray-600'>Live like the stars in these luxurious Southern California estates.</p>
          </div>
          <div className=' mt-6'>
            <div className='flex flex-wrap px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8 gap-5'>

              {
               properties && properties.map((property) => 
                    <Card key={'card_' + property.id} property={property} />
                    
                )
                
              }
            </div>
          </div>
        </main>
      </div>
    </div>
    </Layout>

  );
}




// Home.getInitialProps = async (ctx) => {

//   //   const cookie =  ctx.req ? ctx.req.headers.cookie || "" : document.cookie;
//   // const token =  cookie.token;

//   const isServer = typeof window === 'undefined';
//   const cookie = isServer ? ctx.req.headers.cookie : document.cookie;

//   const getCookie = (name) => {
//     var match = cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//     if (match) return match[2];
//   }

//   const token = getCookie('token');
//   const getProperties = await xRead("/properties/", {}, HTTP_METHOD.GET, token);
//   const currentUser = await xRead("/users/by_token", {}, HTTP_METHOD.GET, token);
//   return {
//     getProperties,
//     currentUser
//   }
// }



interface CardProps {
  className?: string
  property: any;
}

export const Card = (props: CardProps) => {
  const { className, property } = props;
  const { baths, beds, img, description, price, rating, currency } = property;
  return (
    <div className='mt-10 sm:mt-0 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2'>
      <div className='relative pb-5/6'>
      <Link key={property.id} href={`/properties/${property.id}`}>
        <a><img className='absolute insert-0 h-full rounded-lg shadow-md object-cover' src={img} alt="modern-home" /></a>
      </Link>
      </div>
      <div className='relative px-4 -mt-16'>
        <div className='bg-white rounded-lg px-4 py-4 shadow-lg'>
          <Link key={property.id} href={`/properties/${property.id}`}>
          <div className='flex'>
            <span className="inline-block px-2 py-1 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs">
              Plus
            </span>
            <div className='ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide'>
              {beds} beds &bull; {baths} baths
            </div>
          </div>
          </Link>
          <h4 className='mt-1 text-gray-900 font-semibold text-lg'>{description}</h4>
          <div className='mt-1'>
            <span className='text-gray-900'>$ {price}/wk</span>
            <span className='ml-1 text-sm text-gray-600'>{currency}</span>
          </div>
          <div className='mt-2 flex items-center text-sm text-gray-600'>
            <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
            <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
            <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
            <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
            <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
            <span className='ml-2'>{rating} reviews</span>
          </div>
        </div>
      </div>
    </div>
  )
}