import React, {useState} from 'react';
import styled from "styled-components";

function Toggle(props) {
    const [ToggleOn, setToggleOn] = useState(false);

    this.handleChange = this.handleChange.bind(this);

    const clickHandler = () => {
        setToggleOn(prevState => ({}))
    }
    const toggleBtn = styled.div`
        grid-column: 4;
        grid-row: 1/2;
    `;

    return (
        <toggleBtn className="ToggleBtn" onClick={clickHandler} value={this.state.ToggleOn}/>
    );
}

export default Toggle;