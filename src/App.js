import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieList from "./page/MovieList";
import Navbar from "./components/Navbar";
import Erreur from "./page/Erreur";
import Trailer from "./page/Trailer";
import MovieSpecial from "./page/MovieSpecial";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="*" element={<Erreur />} />
        <Route path="/" element={<MovieList search={search} />} />
        <Route path="/Movies" element={<MovieList search={search} />} />
        <Route path="/trailer" element={<Trailer />}></Route>
        <Route path="/description" element={<MovieSpecial />} />
      </Routes>
    </div>
  );
}

export default App;
