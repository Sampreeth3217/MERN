import {useRouteError} from 'react-router-dom';

const RoutingError = () => {
    let err= useRouteError()
    console.log(err)
  return (
    <div>
        <h1 className='display-1 text-danger mt-5 text-center'>{err.data}</h1>
        <h1 className=' text-warning mt-5 text-center'>{err.status}-{err.statusText}</h1>
    </div>
  )
}

export default RoutingError