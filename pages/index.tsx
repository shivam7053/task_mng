import React, { useState, useEffect } from 'react';

type Task = {
  id: number;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
};

const initialTasks: Task[] = [
  // Add some example tasks if needed
];

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'medium' });
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, completed: false }]);
    setNewTask({ title: '', description: '', priority: 'medium' });
  };

  const editTask = (taskId: number, updatedTask: Partial<Task>) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, ...updatedTask } : task));
  };

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  const sortTasks = (tasks: Task[]) => {
    return tasks.sort((a, b) => {
      if (a.priority === b.priority) {
        return a.completed - b.completed;
      }
      if (a.priority === 'high') return -1;
      if (b.priority === 'high') return 1;
      if (a.priority === 'medium') return -1;
      if (b.priority === 'medium') return 1;
      return 0;
    });
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(sortTasks(savedTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks"
      />
      <form onSubmit={(e) => { e.preventDefault(); addTask(newTask); }}>
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
          placeholder="Task Title"
          required
        />
        <input
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          placeholder="Task Description"
          required
        />
        <select
          name="priority"
          value={newTask.priority}
          onChange={handleInputChange}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {filteredTasks.map(task => (
          <li key={task.id} style={{ color: getPriorityColor(task.priority) }}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => editTask(task.id, { title: 'Updated Title' })}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

const getPriorityColor = (priority: 'high' | 'medium' | 'low'): string => {
  switch (priority) {
    case 'high': return 'red';
    case 'medium': return 'yellow';
    case 'low': return 'green';
    default: return 'black';
  }
};
