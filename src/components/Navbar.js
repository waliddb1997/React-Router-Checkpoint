import React from "react";

const Navbar = ({ search, setSearch }) => {
  return (
    <div className="navbar">
      <logo>
       <img src="https://play-lh.googleusercontent.com/iOY1G20-BK4AdhBxrH_zQTEUYAWJ-bMUU975hjBSzEWCDhG5PX_bpBh10fo-Rmrcpg" alt=""/>
      </logo>
      
      <a href="Movies">Movies</a>
      <a href="Trailer">Trailer</a>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Navbar;
