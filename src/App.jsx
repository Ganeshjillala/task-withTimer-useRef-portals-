import Player from "./components/Player.jsx";

import Timer from "./components/Timer.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title={"easy"} targetTime={1} />
        <Timer title={"not easy"} targetTime={5} />
        <Timer title={"diffcult"} targetTime={10} />
        <Timer title={"pro only"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
