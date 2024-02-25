import { useState, useRef } from "react";
export default function Player() {
  const [name, setname] = useState("");
  let playername = useRef();
  function handleclick() {
    setname(playername.current.value);
    playername.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : "unknown"} entity</h2>

      <p>
        <input ref={playername} type="text" />
        <button onClick={handleclick}>Set-Name</button>
      </p>
    </section>
  );
}
