import React, {useState} from 'react';
import "../../src/style/toggleStyle.css";

function Toggle(props) {
    const [selected, setSelected] = useState(false);

    const toggleHandler = () => {
        setSelected(!selected);
    }
    return (
        <div className="row h-25">
            <h3 className="text-start">Toggle</h3>
            <div className="d-flex justify-content-center py-auto my-0">
                <div className={`toggle-container ${selected ? "" : "disabled"}`}
                     onClick={toggleHandler}>
                    <div className={`dialog-button`}/>
                </div>
            </div>
            <span>Toggle Switch {selected ? "ON" : "OFF"}</span>
        </div>
    );
}


export default Toggle;