import React from "react";

function Home() {
  return (
    <div>
      <img src="./json.png" alt="Logo" style={{ width: "50px", height: "auto" }} />
      <div className="main-div">
        <h1>JSON CONVERTER</h1>
        <input
          id="file-upload"
          type="file"
          accept=".json"
        />
        <label htmlFor="file-upload">Select File</label>
        <div className="btn-div">
          <button>Convert into Excel</button>
          <button>Convert into CSV</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
