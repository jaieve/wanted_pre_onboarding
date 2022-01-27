import React, {useState} from 'react';
import styled from "styled-components";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

function Tag(props) {
    const [TagList, setTagList] = useState([]);
    const [Keyword, setKeyword] = useState('');
    const [CurrentId, setCurrentId] = useState(0);

    return (
        <div>
            Tag
            <BigTextUl>
                {TagList.map(tag => {
                    <TagLi>
                        <keyword key={tag.id}>{tag.keyword}</keyword>
                        <deleteBtn data-id={tag.id} onClick={this.onDelete}>
                            {faTimes}
                        </deleteBtn>
                    </TagLi>
                })}
                <transparentTextInput type="text"/>
            </BigTextUl>
        </div>
    );
}

const BigTextUl = styled.ul`
  border: darkslateblue;
`;
const TagLi = styled.li`
  background-color: darkslateblue;
  border: 1px solid darkslateblue;
  border-radius: 20px;
  box-shadow: 10px 5px 5px #7f8fa6;
`;
const keyword = styled.span`
  color: white;
  height: 90%;
  padding: 11px;
`;
const deleteBtn = styled.button`

`;
const transparentTextInput = styled.input`

`;

export default Tag;