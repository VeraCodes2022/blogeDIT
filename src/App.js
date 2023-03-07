import logo from './logo.svg';
import {useState,createContext } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Create from './Create';
import Edit from './Edit';
import Test from './test';

export const AppContext=createContext(null);

function App() {

  const [blogs,setBlogs]=useState([]);
  const [title,setTitle]=useState("");
  const [text,setText]=useState("");

  
  const handleSubmit=(e)=>{
    e.preventDefault()
    title && text && setBlogs([...blogs,{title, text}] );
    setText("");
    setTitle("");
  
  }
  const handleDelete=(id)=>{
    setBlogs(blogs.filter(blog=>blog.id !== id))
  }

  const handleEdit=(id,title,text)=>{
    localStorage.setItem('title',title)
    localStorage.setItem('text',text)
    localStorage.setItem('id',id)
  }
  

  return (
    <AppContext.Provider value={ {blogs,setBlogs,title,setTitle,text,setText,handleSubmit,handleDelete,handleEdit} }>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/edit/:id' element={<Edit/>}></Route>
        </Routes>
    </BrowserRouter>
  </AppContext.Provider>
  );
}

export default App;



