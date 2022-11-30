import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-Inner">
        <img
          className="Gay"
          src="https://d1hjkbq40fs2x4.cloudfront.net/2016-07-16/files/cat-sample_1313.jpg"
          alt="Not found"
        ></img>
        <h5>
          Username: &nbsp;
          <input
            className="search-box"
            type="search"
            placeholder="Enter Username..."
          />
        </h5>
        <h5>
          Password: &nbsp;
          <input
            type="password"
            className="search-box"
            placeholder="Enter Password..."
          />
        </h5>
        <button class="w3-container w3-light-grey w3-justify">Log In</button>
      </div>
    </div>
  );
}

export default App;
