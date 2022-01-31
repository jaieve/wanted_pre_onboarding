import './App.css';
import Tag from "./component/Tag";
import Modal from "./component/Modal";
import Toggle from "./component/Toggle";
import Tab from "./component/Tab";
import AutoComplete from "./component/AutoComplete";

function App() {
    return (
        <div className="App container" style={{height: '100vh'}}>
            <div className="row" style={{height: '100vh'}}>
                <div className="col-6" style={{height: '100vh'}}>
                    <Modal />
                    <Toggle selected={false}/>
                    <Tag />
                </div>
                <div className="col-6">
                    <Tab />
                    <AutoComplete />
                </div>
            </div>
        </div>
    );
}

export default App;
