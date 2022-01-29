import React, {useState} from 'react';
import styled from "styled-components";


function Tag(props) {
    // const [tagList, setTagList] = useState([]);
    // const [keyword, setKeyword] = useState('');
    // const [currentId, setCurrentId] = useState(0);
    // const [tag, setTag] = useState({});
    //
    // const initTag = {
    //     currentId: currentId,
    //     keyword: keyword
    // };
    // setTagList([...tagList, initTag]);
    //
    // const handleTagSubmit = (e) => {
    //     const  { keyword, currentId, tagList } = e.target.key;
    //     const newTag = {
    //     }
    //     setTagList([...tagList, ])
    // }
    //
    // const ul = styled.ul`
    //   border: darkslateblue;
    // `;
    // const TagLi = styled.li`
    //   display: inline-block;
    //   height: 60px;
    //   background-color: darkslateblue;
    //   border: 1px solid darkslateblue;
    //   border-radius: 20px;
    //   box-shadow: 10px 5px 5px #7f8fa6;
    // `;
    // const Keyword = styled.span`
    //   color: white;
    //   height: 90%;
    //   padding: 11px;
    // `;
    // const BtnDelete = styled.button`
    //
    // `;
    // const transparentTextInput = styled.input`
    //
    // `;
    return (
        <div className="row h-25">
            <h3 className="text-start">Tag</h3>
            <div className="row justify-content-center">
                Tag
            </div>
        </div>
    );
}


export default Tag;