import "./App.css";
import ImageUpload from "./components/imageUpload";
import ImagePreview from "./components/imagepreview";

function App() {
  return (
    <div className="container">
      <ImageUpload />
      <ImagePreview />
    </div>
  );
}

export default App;
