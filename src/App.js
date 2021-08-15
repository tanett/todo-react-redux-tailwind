import React from 'react';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList'
import './App.css';

function App() {
  return (
    <div className="App antialiased h-screen flex flex-col justify-between">
        <div className="box-border h-5/6 bg-gray-200 flex flex-col justify-between content-center">
            <AddTodo />
            <VisibleTodoList />
            <p className="p-2 text-lg font-light text-gray-800 rounded ">Нажмите на дело , чтобы сменить его статус</p>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
