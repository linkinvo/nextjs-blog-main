import 'tailwindcss/tailwind.css'
import "../styles/global.css";
import React from 'react'
import { AppProps } from 'next/app';
import {wrapper}  from '../redux/store/store';

 function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}


// App.getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {

  // if (ctx.req && ctx.req['ssrData'] !== undefined && !isEmpty(ctx.req['ssrData'])) {
  //     store.dispatch(setSSRData({ data: ctx.req['ssrData']}));
  // } 

  // if (ctx.req && ctx.req['identity'] !== undefined && !isEmpty(ctx.req['identity'])) {
  //     store.dispatch(setIdentity({ user: ctx.req['identity']}));
  // }

  // (store as SagaStore).runSaga();

  

  // 1. Wait for all page actions to dispatch
  // const pageProps = {
  //     ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  //     namespacesRequired: ['common']
  // };

  // 2. Stop the saga if on server
  // if (store && ctx.req) {
  //     store.dispatch(END);
  //     await (store as SagaStore).sagaTask.toPromise();
  // }

//   // 3. Return props
//   return {
//       pageProps
//   };
// });

// export default App;
export default wrapper.withRedux(App);