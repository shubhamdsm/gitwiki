import {useState} from 'react';
import SearchResults from './SearchResults';
import Stats from './Stats';

const Search = () => {

   const [name,setName] = useState(null);
   const [avatar,setAvatar] = useState(null);
   const [location,setLocation] = useState(null);
   const [site,setSite] = useState(null);
   const [gitLink, setGitLink] = useState(null);
   const [input, setInput] = useState(null);
   const [userName,setUserName] = useState(null);
   const [dateJoin, setDateJoin] = useState(null);
   const [projects, setProjects] = useState(null);
   const [followers,setFollowers] = useState(null);
   const [following,setfollowing] = useState(null);
   
   

   const handleInput = (e) => {
      setInput(e.target.value);
   }

   const setData = ({avatar_url,html_url,name,location,blog,login,created_at,public_repos,followers,following}) => {
      setAvatar(avatar_url);
      setGitLink(html_url);
      setName(name);
      setLocation(location);
      setSite(blog);
      setUserName(login);
      setDateJoin(created_at.substring(0,10));
      setProjects(public_repos);
      setFollowers(followers);
      setfollowing(following);
      


   }
   const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`https://api.github.com/users/${input}`)
      .then(res => res.json())
      .then(data => setData(data))
   }


   return(
      <>
      <div className ='flex-column'>
         <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit}>
            <input type='text'
                  placeholder='search username'
                  onChange={handleInput}
                  className='focus:outline-none focus:ring focus:border-blue-300 mt-20 p-4  rounded-lg'/>
            <button
                  
                  className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-10 mt-20'>Search</button>
           </form>       
         </div>
         { name && <SearchResults name={name} avatar={avatar} location={location} site={site} gitLink={gitLink} userName={userName} dateJoin={dateJoin} projects={projects}/>}
         {  name && <Stats followers={followers} following={following} projects={projects} />}
     </div>
     </>
   )
}
export default Search;