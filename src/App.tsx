import "./App.css";
import { Stage } from "./components/stage";
import { questionStream } from "./data/insurance/question-stream/question-stream-data";

function App() {
  return (
    <div className="App">
      <Stage stream={questionStream} />
    </div>
  );
}

export default App;
