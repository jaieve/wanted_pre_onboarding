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
            <div className="d-flex justify-content-center">
                <div className={`toggle-container ${selected ? "" : "disabled"}`}
                     onClick={toggleHandler}>
                    <div className={`dialog-button`}>
                        {/*{selected ? "YES" : "NO"}*/}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Toggle;