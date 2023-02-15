/* RTK Query
데이터 fetching 할때 쓰임 
* createApi를 리덕스의 configureStore reducer안에 넣야야함 ex) [pokemonApi.reducerPath]: pokemonApi.reducer,
* createApi를 이용해서 query 혹은 mutation를 만듬. 
* 그리고 configureStore에 꼭 middleware를 넣어주샘, 만약 리덕스를 사용안하고 싶읗시 ApiProvider을 import하여 app.js에 넣어줘야함

createApi를 사용해서 정보 받기, 보내는 방법 
받는법 .query() 사용
    -객체를 리턴함
    -자동으로 실행됨 
    -data, isLoading -첫번째 로딩만,  isFetching-이후의 로딩들
보낸는법 .Mutation()
    -배열을리턴
    -첫번째 원소 함수로 수동실행
    -첫번째 원소 함수는 promise로 응답 값 전달
    -두번째 원소 객체의 isLoaidng (isFecthing없음 모든 로딩은 isLoading)
*/
import React from 'react'
import {pokemonApi} from './pokemonApi.js'
import {useGetAllPokemonQuery} from './pokemonApi.js'
import {useGetPokemonByIdQuery} from './pokemonApi.js'
import {useCreatePokemonMutation} from './pokemonApi.js'
/*
console.log(pokemonApi)
Object{ endpoints: {getPokemonByName: {…}}, enhanceEndpoints: ƒ, injectEndpoints:f, reducer: ƒ, reducerPath: "pokemonApi", useGetAllPokemonQuery:f
    useGetPokemonByNameQuery: f, useLazyGetPokemonByNameQuery: ƒ , usePrefetch: ƒ, 
    util: {patchQueryData: ƒ, updateQueryData: ƒ }
*/

function ReduxToolkitQuery() {
    const {data, isLoading} = useGetAllPokemonQuery()
    // console.log(data) // [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    const idFourData = useGetPokemonByIdQuery('4')
    // console.log(idFourData) // {status: 'fulfilled', endpointName: 'getPokemonById', requestId: '9MxF9znE1qy-Jhwd4YVId', originalArgs: '4', startedTimeStamp: 1676412588591, …}
    
    // 정보 보내기 mutation 실패... fakejson이라서 그런가? 다시 알아봐야함.
    const createPokeMutation = useCreatePokemonMutation() 
    const setPokemon = createPokeMutation[0]

    if(isLoading){
        return <h3>Loading...</h3>
    }
    
    return (
        <div>
            <h1>Redux Toolkit Query</h1>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h3>모든 리스트 가져오기</h3>
                    {data?.map((d,i) => <div key={i}>{d.name}</div>)}
                </div>
                <div>
                    <h3>선택한 하나만 가져오기</h3>
                    <div>{idFourData?.currentData?.email}</div>
                </div>
                <div>
                    <h3>정보 보내기</h3>
                    <button onClick={async ()=> {
                        const result = await setPokemon(11, {name:'matt', email:'yki0056'})
                        console.log(result)
                    }}>새로운 포켓몬 정보 보내기</button>
                </div>
            </div>
        </div>
    )
}

export default ReduxToolkitQuery