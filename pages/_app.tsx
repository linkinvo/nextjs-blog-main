import 'tailwindcss/tailwind.css'
import "../styles/global.css";
import React from 'react'
import { AppProps } from 'next/app';
import {wrapper}  from '../redux/store/store';
import { btnLoginClick } from 'redux/store/actions';
import { useDispatch } from 'react-redux';
import { END } from 'redux-saga';

 function App({ Component, pageProps }) {
  const dispatch = useDispatch()
  dispatch(btnLoginClick({
      email: "user7.man@gmail.ru",
      password: "user12345"
  }));
  return <Component {...pageProps} />;
}




// App.getInitialProps = wrapper.getInitialAppProps(store => async ({ Component, ctx }) => {  

//   // 1. Wait for all page actions to dispatch
//   const pageProps = {
//       ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
//       namespacesRequired: ['common']
//   };

//   // 2. Stop the saga if on server
//   if (store && ctx.req) {
//     store.dispatch(btnLoginClick({
//       email: "user7.man@gmail.ru",
//       password: "user12345"
//   }));
//       store.dispatch(END);
//       // await (store as SagaStore).sagaTask.toPromise();
//       await store.sagaTask.toPromise()
//   }

//   // 3. Return props
//   return {
//       pageProps
//   };
// });

export default wrapper.withRedux(App);