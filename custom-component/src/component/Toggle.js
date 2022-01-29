import React, {useState} from 'react';
import styled from "styled-components";

function Toggle(props) {
    // const [ToggleOn, setToggleOn] = useState(false);
    //
    // this.handleChange = this.handleChange.bind(this);
    //
    // const clickHandler = () => {
    //     setToggleOn(prevState => ({}))
    // }
    const toggleBtn = styled.div`
      grid-column: 4;
      grid-row: 1/2;
    `;

    return (
        <div className="row h-25">
            <h3 className="text-start">Toggle</h3>
            <div className="row justify-content-center">
                Toggle
            </div>
        </div>
    );
}

export default Toggle;