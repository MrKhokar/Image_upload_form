const ImagePreview = () => {
  return (
    <div classNameName="">
      <div className="card mb-3">
        <img
          src="..."
          className="card-img-top"
          alt="Picture from DB"
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            Username-(Username from DB)
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;

// For calling and mapping objects from DB cut
// and paste file from 25 to 37

{
  /*import { collection } from "./components/firebase";
const store = () => {
collection.child("Storage").on("value", (snapshot) => {
if (snapshot.val() != null) */
}

//   Here "snapshot.val()" contain data, store it in variable
// and log it to see
// but first push something in DB

{
  /* console.log(snapshot.val());
  });
};
*/
}
