import React from 'react';


function Tab(props) {
    const handleClick = (e) => {
        const className = e.target.className;
        const id = e.target.id;
        console.log(className, id);
        const tabs = document.getElementsByClassName('tabMenu');
        console.log(tabs);
        // 클릭한 tab에 clicked이 없으면
        // 모든 tabMenu에서 clicked 제거
        // 클릭된 tab에만 className에 clicked 추가
    }
    const clicked = false;
    return (
        <div className="row h-25">
            <h3 className="text-start">Tab</h3>
            <div className="row" id="tab" style={{background: 'lightgray', height: '50px'}}>
                <div className="col-1" id="logo">null</div>
                <div className={`col-3 tabMenu ${clicked ? "clicked" : ""}`} id="tab1" onClick={handleClick}>tab1</div>
                <div className={`col-3 tabMenu ${clicked ? "clicked" : ""}`} id="tab2" onClick={handleClick}>tab2</div>
                <div className={`col-3 tabMenu ${clicked ? "clicked" : ""}`} id="tab3" onClick={handleClick}>tab3</div>
            </div>
        </div>
    );
}

export default Tab;