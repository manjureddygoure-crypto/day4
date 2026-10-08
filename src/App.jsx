import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">CI Demo</div>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#status">CI Status</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="badge">● CI Pipeline Ready</div>

          <h1>
            React Frontend
            <span> CI Demo</span>
          </h1>

          <p>
            A simple frontend application to demonstrate a Continuous
            Integration pipeline with React.
          </p>

          <div className="buttons">
            <button onClick={() => setCount(count + 1)}>
              Test Button: {count}
            </button>

            <a href="#status" className="secondary-btn">
              View CI Status
            </a>
          </div>
        </section>

        <section className="cards" id="status">
          <div className="card">
            <div className="icon">✓</div>
            <h3>Build</h3>
            <p>React application can be built successfully.</p>
            <span className="success">Passed</span>
          </div>

          <div className="card">
            <div className="icon">✓</div>
            <h3>Lint</h3>
            <p>Code quality and formatting checks are performed.</p>
            <span className="success">Passed</span>
          </div>

          <div className="card">
            <div className="icon">✓</div>
            <h3>Test</h3>
            <p>Automated tests can be executed during CI.</p>
            <span className="success">Passed</span>
          </div>
        </section>

        <section className="pipeline" id="about">
          <h2>CI Pipeline</h2>

          <div className="pipeline-container">
            <div className="pipeline-step">
              <strong>1</strong>
              <span>Push Code</span>
            </div>

            <div className="line" />

            <div className="pipeline-step">
              <strong>2</strong>
              <span>Install</span>
            </div>

            <div className="line" />

            <div className="pipeline-step">
              <strong>3</strong>
              <span>Lint</span>
            </div>

            <div className="line" />

            <div className="pipeline-step">
              <strong>4</strong>
              <span>Build</span>
            </div>

            <div className="line" />

            <div className="pipeline-step">
              <strong>5</strong>
              <span>Deploy</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>React CI Demo © 2026</p>
      </footer>
    </div>
  );
}

export default App;