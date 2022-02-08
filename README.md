# wanted_pre_onboarding

## 1. 구현방법 및 설명

### Modal
 - 설정 state : **modalVisible**(boolean type, default : `false`)
 - onClick event 발생시 **modalVisible** 수정
 - **modalVisible**이 **true**인 경우 modal 컴포넌트가 나타나도록 설정

### Toggle
 - 설정 state : **selected**(boolean type, default : `false`)
 - onClick event 발생 시 **selected** 변경
   - **selected**가 **true**인 경우 className 설정값이 바뀌며 className에 지정해준 css 변경되며, `ON/OFF` 텍스트가 변경됨.

### Tag
 - `어려워서 검색해가면서 따라서 만듦`
 - 설정 state : **tag**(array type, default: `['CodeStates', 'is', 'awesome']`)
 - `tags.map()`을 이용하여 array의 item을 tag형태의 css가 적용된 `<li>` 태그의 text에 넣어줌.
 - 태그의 `X` 를 클릭하면 해당 태그의 key값을 이용하여 `tags.filter()`
 - `addTag()` : 입력한 단어가 `null` 이 아니고 **tags**에 없으면 `setTags([...tags, value])`
    , **tags**에 있다면 **tags** 수정하지 않음.
   
### Tab
 - 설정 state : tab(Number type, default: 0)
 - 탭메뉴 클릭시 `setTab(idx)`이 실행되어 `{tab+1}`이 화면에 보여지고, 조건에 맞는 탭메뉴만 clicked 클래스가 추가되면서 css변화 

### AutoComplete
 - **`미완성`**
 - 설정 state : hasText, inputValue
 - X 버튼 클릭시 입력한 text 삭제하는 이벤트 구현 `setInputValue("")`
 - input에 text가 입력되면 (`setInputValue(e.target.value)`, `setHasText(true)`),
   dropdown element가 나타나도록 설정 (`<Dropdown />`)


## 2. Error Handling Log 그외 어려웠던 점
 - Modal component를 만들면서  z-index에 대한 개념이 부족하다는 것을 느낌. 찾아서 공부해야겠다.
 - styled component를 적용해서 component들을 만들고 싶었는데 export이 익숙하지 않아서 render되지 않는 문제가 발생하였음. 그래서 사용하지 못함.
 - bootstrap을 평소에 주로 사용해서 css transition 직접 적용하는 방법을 까먹어서 구글링을 통해 원하는 transition 구현

 
## 3.  wanted_pre_onboarding 프로젝트 실행방법
1. `git clone https://github.com/jaieve/wanted_pre_onboarding.git`
2. `cd  wanted_pre_onboarding/custom-component`
3. `npm install --save`
4. `npm start`

[과제 가이드라인 바로가기](https://codestates.notion.site/5f83f7a007664f1abcf0cdbcbbbbd521)

[Netlify 배포링크](https://jaieve-wanted-prebonboarding.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b0e5130e-a19b-4ef0-99f1-dc04a6e4e0cd/deploy-status)](https://app.netlify.com/sites/jaieve-wanted-prebonboarding/deploys)