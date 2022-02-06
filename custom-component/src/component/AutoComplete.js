import React, {useEffect, useState} from 'react';
import ComponentName from "./ComponentName";
import Dropdown from "./Dropdown";
import "../style/autoComplete.css";

function AutoComplete(props) {
    const words = [
        'antique', 'vintage', '중고A급',
        'rustic', 'refurbished'
    ];

    const [hasText, setHasText] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [options, setOptions] = useState(words);
    const [selected, setSelected] = useState(-1);

    useEffect(() => {
        if (inputValue === '' ) {
            setHasText(false);
            setOptions([]);
        }

        if (inputValue !== '') {
            setOptions(words.filter((elem) => {
                return elem.includes(inputValue)
            }))
        }
    }, [inputValue]);
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        setHasText(true);
    }
    const handleDropDownClick = (clickedOption) => {
        setInputValue(clickedOption)
    }
    const handleDeleteButtonClick = (e) => {
        setInputValue("");
    }
    const handleKeyUp = (e) => {
        if(hasText) {
            if (e.key === "ArrowDown" && options.length-1 > selected ){
                setSelected(selected + 1);
            }
            if (e.key === 'ArrowUp' && selected >= 0 ) {
                setSelected(selected - 1);
            }
            if (e.key ==='Enter' && selected >= 0 ) {
                handleDropDownClick(options[selected]);
                setSelected(-1);
            }
        }
    }
    return (
        <div>
            <ComponentName componentsName="AutoComplete"/>
            <div className="autocompleteWrapper">
                <div id="inputContainer">
                    <input type="text"
                           className="m-0 p-0"
                           value={inputValue}
                           defaultValue={inputValue}
                           onChange={handleInputChange}
                           onKeyUp={handleKeyUp} />
                    <div className="delete-button"
                         onClick={handleDeleteButtonClick}>
                        &times;
                    </div>
                </div>
                {hasText && <Dropdown
                                options={options}
                                handleComboBox={handleDropDownClick}
                                selected={selected}>
                </Dropdown>}
            </div>
        </div>
    );
}

export default AutoComplete;