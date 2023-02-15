React-Redux-toolkit

configureStore(): createStore를 감싸서 쓸만한 기본값들과 단순화된 설정을 제공합니다. 여러분의 리듀서 조각들을 자동으로 합쳐주고, 기본 제공되는 redux-thunk를 포함해서 여러분이 지정한 middleware들을 더해주고, Redux DevTools 확장을 사용할 수 있게 합니다.

createSlice(): 조각 이름과 상태 초기값, 리듀서 함수들로 이루어진 객체를 받아 그에 맞는 액션 생산자와 액션 타입을 포함하는 리듀서 조각을 자동으로 만들어줍니다.

- 동기적 작업을 할때는 reducers 사용, 왜냐면 action creator가 자동으로 만들어짐 (counter폴더의 counterSlice.js 참고)
- 비동기 작업을 할때는 extraReducer 사용, 왜냐면 action creator가 자동으로 안만들어짐 (user폴더의 productSlice.js 참고 extraReducers안에 직접만듬)

createReducer(): switch 문을 작성하는 않고, 액션 타입과 리듀서 함수를 연결해주는 목록을 작성가능, 그리고 immer 라이브러리를 자동으로 사용해서 불변
createAction(): 주어진 액션 타입 문자열을 이용해 액션 생산자 함수를 만들어줍니다. 함수 자체에 toString() 정의가 포함되어 있어서, 타입 상수가 필요한 곳에 사용할 수 있습니다.
createSlice(): createReducer + createAction의 더 간편한 방법으로서 자동으로 action을 만들어서 reducer와 매칭시킴

createAsyncThunk: 액션 타입 문자열과 프로미스를 반환하는 함수를 받아, pending/fulfilled/rejected 액션 타입을 디스패치해주는 thunk를 생성해줍니다.
Redux는 기본적으로 액션객체만을 디스패치할 수 있습니다. 하지만 Redux Thunk를 활용하면 객체 대신 함수를 생성하는 액션 생성함수를 작성할 수 있게 해줍니다. 이러한 동작방식을 활용하여 Redux에서 비동기적인 프로그래밍을 구현할 수 있습니다.

createEntityAdapter: 저장소 내에 정규화된 데이터를 다루기 위한 리듀서와 셀렉터를 만들어줍니다.
createSelector 유틸리티를 Reselect 라이브러리에서 다시 익스포트해서 쓰기 쉽게 해줍니다.

current() : redux toolkit으로 reducer안에서 현재 state의 값을 console.log()로 보려고하면 이상한게 나옴.
current(console.log(state)) 이런식으로 적어야지 나옴. 다른 값들 (ex action.payload 들은) console.log() 해도 나옴

//
normal Redux는 redux-saga를 사용하고, redux-toolkit은 RTK Query라는걸 사용하는듯  
Redux 를 사용하다 보면 서버 데이터를 받아와 상태 관리를 하기 위해 Redux-saga 를 사용하게 되고, Client Side 에서 전역 상태 관리를 위해서 사용하는 라이브러리가 의도와는 다르게 비동기 요청을 위한 로직으로 Store 혹은 module 이 비대해지게 됩니다. 비동기 요청을 위해 request.success, request.fail 상태의 로직도 다뤄야 하며, 이 전체적인 과정을 Redux 모듈에서 관리하려니 보일러 플레이트가 관리하기 어려울 정도로 커지는건 당연한 상황입니다.
배우기 위해 런닝커브가 있으므로 일단 이곳에선 스킵.
대체자로 react-query를 사용가능 ...
