import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../Redux/actions';

const ImagePreview = () => {

  const data = useSelector(state => state);
  const dispatch = useDispatch();

  React.useEffect(() => { dispatch(getData()); }, [dispatch]);

  return (
    <div classNameName="">
      { data.image ?
        (<div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title text-center">Username-{data?.userName}</h5>
          </div>
          <img src={data?.image} className="card-img-top" alt="" />
        </div>
        ) : (<h1 style={{ textAlign:"center"}}>Loading... Please Wait</h1>)
      }
    </div>
  );
};

export default ImagePreview;
