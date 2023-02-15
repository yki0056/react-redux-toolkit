import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: () => `/users`,
    }),
    getPokemonById: builder.query({
      query: (id) => `/users/${id}`,
    }),
    createPokemon:builder.mutation({
      query: (id, name) => ({
        url:`/users/${id}`,
        method:'POST',
        body: name,
      })
    })
  }),
})
  
export const { useGetAllPokemonQuery } = pokemonApi  // * export시 위의 이름과 같게 적고 뒤에 Query 혹은 Mutation 을 붙혀야함  
export const { useGetPokemonByIdQuery } = pokemonApi
export const { useCreatePokemonMutation } = pokemonApi