import React,{useContext} from 'react';
import { AppContext } from './App';
import { nanoid } from 'nanoid';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
const {blogs,handleDelete}=useContext(AppContext);
const redirect=useNavigate()

const handleUpdate=(id,title,text)=>{
    localStorage.setItem('id',id)
    localStorage.setItem('title',title)
    localStorage.setItem('text',text)
}

  return (
    <div>{
        blogs.map(
            (blog)=>{return <ul key={blog.id=nanoid()}>
                <li><h2>{blog.title}</h2></li>
                <li><p>{blog.text}</p></li>
                <li><button
                    onClick={()=>{handleDelete(blog.id)}}
                >Delete</button>
                    <button onClick={()=>{
                        handleUpdate(blog.id,blog.title,blog.text)
                        redirect(`/edit/${blog.id}`,{replace:true})}}
                    >Edit</button>
                </li>
            </ul>}
        )
        
        }</div>
  )
}

export default Home