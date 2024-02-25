import "./App.css";
import Header from "./component/Header";
import Video from "./component/Video";
import MenuBar from "./component/MenuBar";
function App() {
  return (
    <>
      <Header />
      <div className="section">
        <MenuBar />
        <div className="videoFlex">
          <Video />
          <Video />
        </div>
      </div>
    </>
  );
}

export default App;
