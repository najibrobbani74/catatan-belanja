import { useState } from "react";

import Header from "./components/Header"
import GroceryList from "./components/GroceryList"
import Footer from "./components/Footer"
import AddForm from "./components/AddForm"


export default function App() {
  const [groceryItems,setGroceryItems] = useState([
    {
      id: 1,
      name: 'Kopi Bubuk',
      quantity: 2,
      checked: true,
    },
    {
      id: 2,
      name: 'Gula Pasir',
      quantity: 5,
      checked: true,
    },
    {
      id: 3,
      name: 'Air Mineral',
      quantity: 3,
      checked: false,
    },
  ]);
  function handleAddItem(newItem){
    setGroceryItems([...groceryItems,newItem])
  }
  function handleDeleteItem(id){
    setGroceryItems(()=>groceryItems.filter((item)=>{
      if(item.id != id) return item
    }))
  }
  function handleToggleItem(id) {
    setGroceryItems(()=>groceryItems.map((item)=>{
      if (item.id == id) return {...item,checked :!item.checked}
      else return item
    }))
  }
  function handleClearItems(){
    setGroceryItems([])
  }
  return (
    <div className="app">
      <Header/>
      <AddForm onAddItem={handleAddItem} />
      <GroceryList groceryItems={groceryItems} onClearItems={handleClearItems} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}/>
      <Footer groceryItems={groceryItems} />
    </div>
  )
}




