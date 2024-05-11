

// import React, { useState, useEffect } from 'react';
// import '../LocalTasker.css';

// const LocalTasker = () => {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState('');

//   // Load tasks from local storage on initial render
//   useEffect(() => {
//     const savedTasks = JSON.parse(localStorage.getItem('tasks'));
//     if (savedTasks) {
//       setTasks(savedTasks);
//     }
//   }, []);

//   // Save tasks to local storage whenever tasks state changes
//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//   }, [tasks]);

//   // Function to handle task creation
//   const addTask = () => {
//     if (newTask.trim() !== '') {
//       setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
//       setNewTask('');
//     }
//   };

//   // Function to handle task completion
//   const toggleTaskCompletion = (taskId) => {
//     setTasks(tasks.map(task => {
//       if (task.id === taskId) {
//         return { ...task, completed: !task.completed };
//       }
//       return task;
//     }));
//   };

//   // Function to handle task deletion
//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter(task => task.id !== taskId));
//   };

//   // Function to clear completed tasks
//   const clearCompletedTasks = () => {
//     setTasks(tasks.filter(task => !task.completed));
//   };

//   return (
//     <div>
//       <h1>LocalTasker</h1>
//       <input
//         type="text"
//         placeholder="Enter task"
//         value={newTask}
//         onChange={(e) => setNewTask(e.target.value)}
//       />
//       <button onClick={addTask}>Add Task</button>
//       <ul>
//         {tasks.map(task => (
//           <li key={task.id}>
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleTaskCompletion(task.id)}
//             />
//             <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
//             <button onClick={() => deleteTask(task.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <button onClick={clearCompletedTasks}>Clear Completed</button>
//     </div>
//   );
// };

// export default LocalTasker;

import React, { useState, useEffect } from 'react';
import '../LocalTasker.css';

const LocalTasker = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Load tasks from local storage on initial render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks && savedTasks.length > 0) { // Check if tasks are present
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to local storage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Function to handle task creation
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  // Function to handle task completion
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  // Function to handle task deletion
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Function to clear completed tasks
  const clearCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <div className="container">
      <h1>Task Buddy</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="input-field"
        />
        <button onClick={addTask} className="add-button">Add Task</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span className={task.completed ? "completed-task" : ""}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} className="delete-button">Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCompletedTasks} className="clear-button">Clear Completed</button>
    </div>
  );
};

export default LocalTasker;
