 
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import { wrapper } from '../redux/store/store'
import { loadData } from '../redux/store/actions'
import Home from './home'

const Index = () => {
  const dispatch = useDispatch()

  return (
    <> 
      <Home />
    </>

  );

}

// @ts-ignore
// export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {

//   if (!store.getState().placeholderData) {
//     store.dispatch(loadData())
//     store.dispatch(END)
//   }

//   await store.sagaTask.toPromise()
// })

export default Index;