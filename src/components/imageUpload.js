const ImageUpload = () => {
  return (
    <>
      <form
        onSubmit=""
        style={{ marginTop: 120 }}
        className=" mx-auto  border p-3 mb-6 ">
        <legend className="border d-inline text-center mx-auto ">
          Upload
        </legend>
        <div className="d-flex justify-content-center  p-2 ">
          <div className="form-group mt-3">
            <div className="input-group mb-6">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center  p-2 ">
          <div className="form-group mt-3">
            <div className="input-group mb-6">
              <input type="file" className="form-control" />
            </div>
          </div>
        </div>

        <div className="form-group text-center m-3 p-2">
          <button
            type="submit"
            className="btn btn-outline-info ">
            {" "}
            Upload
          </button>
        </div>
      </form>
    </>
  );
};

export default ImageUpload;

// For pushing Data in DB use set instead of push

{
  /*collection.child("Storage").set(OBJ, (err) => {
  if (err) console.log(err);
});*/
}

// here OBJ is a object variable contenting values from form to push
