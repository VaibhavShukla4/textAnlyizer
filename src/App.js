import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div className="">
        <Textform title="Enter Your Text"/>
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
