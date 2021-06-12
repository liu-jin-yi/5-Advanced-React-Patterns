import "./App.css";

import ExampleOne from "./patterns/compound-component/Usage";
import ExampleTwo from "./patterns/control-props/Usage";
import ExampleThree from "./patterns/custom-hooks/Usage";
import ExampleFour from "./patterns/props-getters/Usage";
import ExampleFive from "./patterns/state-reducer/Usage";
function App() {
  return (
    <div className="App">
      <ExampleOne />
      <ExampleTwo />
      <ExampleThree />
      <ExampleFour />
      <ExampleFive />
    </div>
  );
}

export default App;
