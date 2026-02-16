import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DIY Braille Printer</h1>
      </header>
      <main className="App-main">
        <div className="printer-image">
          <img src="https://via.placeholder.com/600x400" alt="DIY Braille Printer" />
        </div>
        <div className="download-section">
          <p>Download 3D models and code to build your own printer.</p>
          <a href="/placeholder-download.txt" download className="download-button">
            Download
          </a>
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2026 DIY Braille Printer Project</p>
      </footer>
    </div>
  );
}

export default App;
