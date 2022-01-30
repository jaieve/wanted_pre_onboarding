import React, {useState} from 'react';
import ComponentName from "./ComponentName";
import "../../src/style/tabStyle.css";



function Tab(props) {
    const [tab, setTab ] =useState(0);
    const handleClick = (id) => {
        console.log(id);
        setTab(id);
    }
    const clicked = false;
    return (
        <div className="row h-25">
            <ComponentName componentsName="Tab"/>
            <div className="row" id="tab" style={{background: 'lightgray', height: '50px'}}>
                <div className={`col-4 px-0 mx-0 tabMenu ${tab===0 ? "clicked" : ""}`} id="tab1" onClick={() => {handleClick(0)}}>tab1</div>
                <div className={`col-4 px-0 mx-0 tabMenu ${tab===1 ? "clicked" : ""}`} id="tab2" onClick={() => {handleClick(1)}}>tab2</div>
                <div className={`col-4 px-0 mx-0 tabMenu ${tab===2 ? "clicked" : ""}`} id="tab3" onClick={() => {handleClick(2)}}>tab3</div>
            </div>
            <span>Tab Menu {tab + 1}</span>
        </div>
    );
}

export default Tab;