import React,{useContext,useEffect} from 'react';
import {AppContext} from './App';
import {useNavigate} from 'react-router-dom';

function Create() {

const {handleSubmit, title, setTitle, text, setText}=useContext(AppContext)
const redirect=useNavigate()
  return (
    <form  onClick={e=>handleSubmit(e)}>
      <div onClick={e=>e.stopPropagation()}>
        <label>Title</label>
        <br></br>
        <input 
        value={title}
        onChange={
          e=>{setTitle(e.target.value)}
        }
        />
        <br></br>
        <label>Blog</label>
        <br></br>
        <textarea
        value={text}
        onChange={e=>setText(e.target.value)}
        ></textarea>
      </div>
      <br></br>
      <button
      onClick={()=>redirect('/',{replace:true})}
      
      >Submit</button>
    </form>
  )
}

export default Create