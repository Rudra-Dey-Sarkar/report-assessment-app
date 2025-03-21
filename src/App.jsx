import Background from "./components/Background/Background";
import Main from "./components/Main/Main";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <div className="px-2 lg:px-10">
      {/* background features */}
      <Background />

      {/* Topbar features */}'
      <Topbar />

      {/* Main body features */}
      <Main />
    </div>
  );
}

export default App;
