import "./App.css";
import Start from "./Start.js";
import Plans from "./Plans.js";
import Equipment from "./Equipment.js";

function App() {
  return (
    <div>
      <div className="head row">
        <h1>Vítejte!!</h1>
      </div>
      <h2>Tipy, tréninkové plány a inspirace pro běžce všech úrovní</h2>
      <div>
        <button>
          <Start />
        </button>
        <button>
          <Plans />
        </button>
        <button>
          <Equipment />
        </button>
      </div>
    </div>
  );
}

export default App;
