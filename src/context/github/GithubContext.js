import { createContext, useReducer } from "react";
import githubReducer from "./GihtubReducer";

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
    const initialState = {
      users: [],
      user:{},
      loading: false,
      repos:[],
      }

  const [state,dispatch] = useReducer(githubReducer,initialState) 
  
//Making Context function available to components.
  return <GithubContext.Provider value={{
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos, 
        ...state,
        dispatch,
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext