import React from 'react';
import { useDispatch } from 'react-redux';
import { saveData } from '../Redux/actions';

const ImageUpload = () => {

  const dispatch = useDispatch();

  const [userName, setUserName] = React.useState('');
  const [image, setImage] = React.useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!userName) return alert('Username Missing');
    if(!image.name) return alert('Please Select Image');
    dispatch(saveData({userName, image}));
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginTop: 120 }} className=" mx-auto  border p-3 mb-6 ">
        <legend className="border d-inline text-center mx-auto ">Upload</legend>
          <div className="d-flex justify-content-center  p-2 ">
            <div className="form-group mt-3">
              <div className="input-group mb-6">
                <label className="form-control input-group">Username</label>
                <input type="text" name="userName" className="form-control" placeholder="Your Name" onChange={(e) => setUserName(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center p-2 ">
          <div className="form-group mt-3">
            <div className="input-group mb-6">
              <input type="file" name="image" className="form-control" onChange={(e) => setImage(e.target.files[0])}/>
            </div>
          </div>
        </div>

        <div className="form-group text-center m-3 p-2">
          <button type="submit" className="btn btn-outline-info btn-lg"> Submit </button>
        </div>
      </form>
    </>
  );
};

export default ImageUpload;
