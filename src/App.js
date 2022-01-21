import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all", ...new Set (items.map(items => items.category))]
console.log(allCategories);

function App() {
  const[menuItems, setMenuItems] = useState(items)
  const[categories, setCategories] = useState(allCategories)
  const filterItems = (category) =>{
    if(category == "all"){
      return setMenuItems(items)
    }
    const newItems = items.filter(item => item.category == category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className='menu section'>
        <h2>menu project setup</h2>
        <div className='underline'></div>
      </section>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu menu={menuItems}/>
    </main>
  );
}

export default App;
