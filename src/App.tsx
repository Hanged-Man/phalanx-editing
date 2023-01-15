import React from 'react'
import anime from 'animejs'
import logo from './logo.svg'
import './App.css'
import AnimatedCursor from './comps/cursor'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
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
