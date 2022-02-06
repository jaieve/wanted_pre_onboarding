import React, {useState} from 'react';
import ComponentName from "./ComponentName";
import "../style/tagStyle.css";

function Tag(props) {
    const initialTags = ['CodeStates', 'is', 'awesome'];
    const [tags, setTags] = useState(initialTags);

    const removeTags = (idx) => {
        setTags(tags.filter((tag) => {
            return tag !== tags[idx]
        }))
    }

    const addTag = (e) => {
        let value = e.target.value.trim();
        if (e.key === 'Enter' && !tags.includes(value) && value) {
            setTags([...tags, value]);
            e.target.value = '';
        } else if (e.key === 'Enter' && !value) {
            e.target.value = "";
        }

    }

    return (
        <div className="row h-25">
            <ComponentName componentsName="Tag"/>
            <div id="tagInput">
                <ul id="tags">
                    {tags.map((tag, index) => (
                        <li key={index} className="tag">
                            <span className="tag-title">{tag}</span>
                            <span className="tag-close-icon"
                                  onClick={() => {
                                      removeTags(index)
                                  }}>
                                &times;
                            </span>
                        </li>
                    ))}
                </ul>
                <input className="tag-input"
                       type="text"
                       onKeyUp={(e) => {
                           addTag(e)
                       }}
                       placeholder="Press enter to add tags"/>
            </div>
        </div>
    );
}


export default Tag;