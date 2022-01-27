import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "./component/Modal";
import Toggle from "./component/Toggle";
import Tag from "./component/Tag";

function App() {
    return (
        <div>
            <Modal/>
            <Toggle/>
            <Tag/>
        </div>
    );
}

export default App;
