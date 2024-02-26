
import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item])
  }

  const handleDeleteItem = (id) => {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered)
  }

  const handleToggleItem = (id) => {
    setItems(items => items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  const handleClearList = () => {
    const resp = window.confirm('Are you sure you want to delete all the items?')
    if (!resp) return;
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem} onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  );
}

