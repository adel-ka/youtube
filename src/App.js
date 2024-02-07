import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NaveBare from "./Components/NaveBare";
import MainVideo from "./Components/MainVideo";
import VideoList from "./Components/VideoList";
import Comments from "./Components/Comments";

function App() {
  return (
    <div className="App">
      <NaveBare />
      <div class="row">
        <div class="col-8" >
          <MainVideo />
          <Comments/>
        </div>
        <div class="col-4" >
          <VideoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
