import Link from 'next/link';
import Layout from '../components/Layout'
import { connect, useDispatch, useSelector } from 'react-redux';
import { getAllProperties } from 'redux/models/PropertiesSaga';
import { wrapper } from 'redux/store/store';
import React from 'react'

function Home(props) {
  const properties = props.properties;
  const identity = props.identity;
  
  console.log("properties",properties);
  console.log("Object.keys(properties)",Object.keys(properties));

  return(
    <>
    
    <Layout props={identity}>
      {
        properties === undefined || properties.length <= 0 ?
          <div className="my-10 flex justify-center text-red-500 font-bold">
            <h1>There are not any products...</h1>
          </div>
          :
          <div className="min-h-screen  antialiased xl:flex xl:flex-col xl:h-screen">
            <div className='xl:flex-1 xl:flex '>
              <main className='mt-6 xl:flex-1 xl:overflow-y-scroll'>
                <div className='px-4 xl:px-8'>
                  <h3 className='text-gray-900 text-xl'>Los Angeles</h3>
                  <p className='text-gray-600'>Live like the stars in these luxurious Southern California estates.</p>
                </div>
                <div className=' mt-6'>
                  
                  <div className='flex flex-wrap px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8 gap-5'>

                    {
                      properties && Object.values(properties).map((info: any) =>
                        // <Card key={'card_' + id} property={properties[id]} />
                        <div className='mt-10 sm:mt-0 sm:max-w-xs sm:w-full sm:flex-shrink-0 sm:px-2' key={info.id}>
                        <div className='relative pb-5/6'>
                          <Link key={properties.id} href={`/properties/${info.id}`}>
                            <a><img className='absolute insert-0 h-full rounded-lg shadow-md object-cover' src={info.img} alt="modern-home" /></a>
                          </Link>
                        </div>
                        <div className='relative px-4 -mt-16'>
                          <div className='bg-white rounded-lg px-4 py-3 shadow-lg'>
                            {/* <Link key={properties.id} href={`/properties/${properties.id}`}> */}
                              <a><div className='flex'>
                                <span className="inline-block px-2 py-1 leading-none bg-green-200 text-green-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                                  Plus
                                </span>
                                <div className='ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide'>
                                  {info.beds} beds &bull; {info.baths} baths
                                </div>
                              </div></a>
                            {/* </Link> */}
                            <h4 className='mt-1 text-gray-900 font-semibold text-lg'>{info.description}</h4>
                            <div className='mt-1'>
                              <span className='text-gray-900'>$ {info.price}/wk</span>
                              <span className='ml-1 text-sm text-gray-600'>{info.currency}</span>
                            </div>
                            <div className='mt-2 flex items-center text-sm text-gray-600'>
                              <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
                              <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
                              <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
                              <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
                              <svg className='h-4 w-4 fill-current text-green-500' viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.28279 10.9302C2.54916 11.3159 1.69173 10.6929 1.83184 9.87604L2.30425 7.12166L0.303081 5.171C-0.290436 4.59247 0.0370741 3.58449 0.857294 3.46531L3.62285 3.06345L4.85964 0.557434C5.22645 -0.185811 6.2863 -0.185811 6.65311 0.557434L7.8899 3.06345L10.6555 3.46531C11.4757 3.58449 11.8032 4.59247 11.2097 5.171L9.2085 7.12166L9.68091 9.87604C9.82102 10.6929 8.96359 11.3159 8.22996 10.9302L5.75638 9.62978L3.28279 10.9302Z" /></svg>
                              <span className='ml-2'>{properties.rating} reviews</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    }
                  </div>
                </div>
              </main>
            </div>
          </div>
      }
    </Layout>
   
   
    </>
  );
}

//@ts-ignore
Home.getInitialProps = wrapper.getInitialAppProps(store => () => {

  store.dispatch(getAllProperties());
  // console.log('List.getInitialAppProps()');
  // console.log('store.getState()',store.getState());
  // store.dispatch(setAllData());
});

const mapStateToProps = (state) => {
  const { entities } = state;
  return {
     properties: entities.properties,
     identity: state.identity,
     reviews:entities.reviews,
  }
}

export default connect(mapStateToProps)(Home)
