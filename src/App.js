import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';

import './App.css';

export default function App(){

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('storedData')) || []);
  const [task, setTask] = useState({});

  useEffect(()=>{
    localStorage.setItem('storedData', JSON.stringify(taskList))
  }, [taskList])

  return(
    <div className="app">
      <Header/>
      <div id="body">
        <Body 
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
        />
      </div>
      <Footer/>
    </div>
  );
}