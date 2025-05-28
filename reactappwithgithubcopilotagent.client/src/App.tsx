import { useEffect, useState } from 'react';
import './App.css';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

function App() {
    const [forecasts, setForecasts] = useState<Forecast[]>();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tableLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td className="temp-value">{forecast.temperatureC + 1}</td>
                        <td className="temp-value">{forecast.temperatureF + 1}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    // Helper to determine background class by today's temperature
    function getBackgroundClassByTemperature() {
        if (!forecasts || forecasts.length === 0) return 'bg-default';
        const todayC = forecasts[0].temperatureC + 1;
        if (todayC < 0) return 'bg-cold';
        if (todayC < 10) return 'bg-cool';
        if (todayC < 20) return 'bg-mild';
        if (todayC < 30) return 'bg-warm';
        return 'bg-hot';
    }

    return (
        <div className={getBackgroundClassByTemperature() + ' bg-image'}>
            <h1 id="tableLabel">React Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
            <button className="refresh-btn" onClick={populateWeatherData}>
                &#x21bb; Refresh
            </button>
        </div>
    );

    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        if (response.ok) {
            const data = await response.json();
            setForecasts(data);
        }
    }
}

export default App;