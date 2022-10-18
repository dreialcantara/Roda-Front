import "./index.css";

const loading =
  "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921";

function Loading() {
  return (
    <div className="h-100 w-100 loader-container">
      <img className="loader w-50" src={loading} alt="loading" />
    </div>
  );
}

export default Loading;
