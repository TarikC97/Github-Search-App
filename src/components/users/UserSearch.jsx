import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubActions'

const UserSearch = () => {
    const[text, setText]= useState('')

    const {users,dispatch} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    //Getting user input trough event
    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(text === ''){
            setAlert('Field is empty. To get user data please type the name of user. ','error')
        }
        else{
            dispatch({type: 'SET_LOADING',})
            //Getting users by name we type.
            const users = await searchUsers(text)
            dispatch({
              type: 'GET_USERS',
              payload: users,
            })
            setText('')
        }
    }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2
                    lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <div className="relative">
                    <input type="text" 
                    className="w-full or-40 bg-gray-200 input 
                                input-lg text-black"
                    placeholder="Search"
                    value={text}
                    onChange={handleChange} 
                    />
                    <button className="absolute top-0 right-0 
                            rounded-l-none w-36 btn btn-lg">
                        Go
                    </button>
                </div>
            </div>
        </form>
      </div>
      {users.length > 0 &&(
           <div>
           <button className="btn btn-ghost btn-lg"
                    onClick={()=>dispatch({type: 'CLEAR_USERS',})}>
              Clear
           </button>
        </div>
      )}
    </div>
  )
}

export default UserSearch