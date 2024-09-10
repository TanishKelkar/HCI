import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Hello, Tanish</h1>
        </header>
        
        <section className="location-section">
          <div className="location-box">
            <h2>Your Location</h2>
            <div className="weather-info">
              <span className="icon">🌧️</span>
              <span className="temp">32F</span>
            </div>
            <p>Cloud Cover with Showers</p>
          </div>
        </section>
        
        <section className="travel-section">
          <h2>Upcoming Travel 🚗</h2>
          <div className="travel-box">
            <div className="travel-destination">
              <h3>Trip to Office - Exton, PA</h3>
              <div className="weather-info">
                <span className="icon">🌧️</span>
                <span className="temp">32F</span>
              </div>
              <p>Cloud Cover with Showers</p>
            </div>
            <div className="travel-destination">
              <h3>Trip to Home - Philadelphia, PA</h3>
              <div className="weather-info">
                <span className="icon">🌧️</span>
                <span className="temp">32F</span>
              </div>
              <p>Cloud Cover with Showers</p>
            </div>
          </div>
        </section>

        <section className="ai-assistant-section">
          <h2>AI Assistant</h2>
          <div className="ai-message">
            <span className="phone-icon">📞</span>
            <p>Carry an Umbrella! Rain predicted at both office and home with warm weather and no wind.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
