import "./App.css";
import Form from "./Form";
import Date from "./Date";
import CurrentLocation from "./CurrentLocation";
import MainWeather from "./MainWeather";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="card border-info border-3">
              <div className="card-body">
                <Form />
                <Date />
                <CurrentLocation />
                <MainWeather />
                <Forecast />
              </div>
            </div>
          </div>
        </div>

        <p className="build-info">
          This weather app was created by{" "}
          <a
            href="https://www.linkedin.com/in/zoeelizabethblogg/"
            target="_blank"
            rel="noopener"
          >
            Zoe Blogg{" "}
          </a>
          and is open-sourced on{" "}
          <a href="https://github.com/ZoCodes/weatherapp">GitHub</a>
        </p>
      </header>
    </div>
  );
}

export default App;
