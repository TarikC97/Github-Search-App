import axios from "axios"

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

// Get search results
//Passing (text) whatever we typed.
export const searchUsers= async (text) => {

    const params = new URLSearchParams({
      q: text,
    })
    const response = await axios.get
    (`https://api.github.com/search/users?${params}&client_id=${githubClientId}&client_secret=${githubClientSecret} `)

    return response.data.items
  }
 //Getting single user and user repo.
 //login(username)
 //promise.all when using 2 requests from api.
 export const getUserAndRepos = async(login) =>{
    const [user,repos] = await Promise.all([
        axios.get(`https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecret}`),
        axios.get(`https://api.github.com/users/${login}/repos?per_page=5&sort=createt:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
    ])

    return { user: user.data, repos: repos.data}
 }