import React from 'react';

function Dropdown(props) {
    const options = props.options;
    const handleComboBox = props.handleComboBox;
    const selected = props.selected;

    return (
        <ul id="dropdown" className="mx-auto">
            { options.map( (option ,idx) => {
                <li key={idx}
                    onClick={() => { handleComboBox(option)}}
                    className={selected === idx ? 'selected' : ''}>
                    {option}
                </li>
            })}
        </ul>
    );
}

export default Dropdown;