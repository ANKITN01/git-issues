import './App.css';
import React,{useState} from  'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function App() {
  const [user,setUser] = useState("");
  const [loading,setLoading] = useState(false);
  const [repos,setRepos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();
    searchRepos();
  }
  
  function searchRepos(repoName){
    setLoading(true);
    fetch(`https://api.github.com/repos/PHP-FFMpeg/${user}/issues`)
    .then(resp => resp.json())
    .then(data => console.log(data));
    return (
      console.log(user.title)
    )
  }
;
  function renderRepo(repo){
    console.log(repo.issues)
    return(
      <div className='row' key={repo.id}>
        <h2 className='repo-name'>
          {repo.url}
        </h2>
      </div>
    )
  }

  return (
    <div className="App">
      <div className='SearchNav mt-2'>
      <form className='form'>
      <h1>{user}</h1>
        <input className='input mr-3' value={user}  placeholder='Search Github Issue' onChange={e=>setUser(e.target.value)}></input>
        <Button className='button' onClick={handleSubmit}>{loading? "Searching...":"Search"}</Button>
      </form>
    <div className="result=container">
      {repos.map(renderRepo)}
    </div>
      </div>
    </div>
  );
}

export default App;
