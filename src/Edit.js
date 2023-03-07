import React,{useContext,useEffect,useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import { AppContext } from './App';
 
function Edit() {
    const {blogs}=useContext(AppContext);
    const {id}=useParams();
    const redirect=useNavigate();
    const [title,setTitle]=useState("");
    const [text,setText]=useState("");

var objIndex=blogs.map(
    function (e) {  
        return e.id
    }
).indexOf(id)




const handleAdd=(e)=>{
    e.preventDefault();
    let updatedBlog=blogs[objIndex];
    updatedBlog.title=title;
    updatedBlog.text=text;
    updatedBlog.id=id;
    redirect('/')
}

useEffect(
    ()=>{
        setTitle(localStorage.getItem('title'))
        setText(localStorage.getItem('text'))
    },[]
)

  return (
 
        <form onClick={e=>{handleAdd(e)}}>
            <div onClick={(e)=>{e.stopPropagation()}}>
                <input value={title} onChange={e=>{setTitle(e.target.value)}}/>
                <br></br>
                <textarea value={text} onChange={e=>{setText(e.target.value)}}></textarea>
                <br></br>
            </div>
            <button >Update</button>
        </form>
  )
}

export default Edit