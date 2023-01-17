import React from 'react'
import logo from './logo.svg'
import './App.css'
import AnimatedCursor from './comps/cursor'
import Phalanx from './comps/phalanx'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Phalanx />

                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
            <AnimatedCursor />
        </div>
    )
}

export default App
