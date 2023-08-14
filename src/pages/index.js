import Todo from '@/components/Todo';
import { useState } from 'react';

const Index = ({ initialData }) => {
  const [todos, setTodos] = useState(initialData);

  const fetchData = async (count) => {
    let fetchedData = [];
    for (let i = 0; i < count; i++) {
      const randomID = Math.floor(Math.random() * 100) + 1;
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomID}`);
      const data = await res.json();
      fetchedData.push(data);
    }

    fetchedData.sort((a, b) => {
      if (a.completed === b.completed) {
        return a.title.localeCompare(b.title);
      }
      return a.completed ? 1 : -1;
    });
    setTodos(fetchedData);
  };
  return (
    <Todo  fetchData={fetchData} todos={todos}/>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const initialData = await res.json();

  return {
    props: {
      initialData: [initialData]
    }
  };
}

export default Index;