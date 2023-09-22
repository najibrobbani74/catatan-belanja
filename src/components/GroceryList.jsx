import { useState } from 'react'
import Item from './Item'
export default function GroceryList({ groceryItems, onDeleteItem, onToggleItem, onClearItems }) {
    const [sortBy, setSortBy] = useState('input')
    let sortedItems = groceryItems
    if (sortBy == 'input') {
        sortedItems = groceryItems
    } else if (sortBy == 'name') {
        sortedItems = groceryItems.slice().sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy == 'checked') {
        sortedItems = groceryItems.slice().sort((a, b) => b.checked - a.checked)
    }

    return (
        <>
            <div className="list">
                <ul>
                    {sortedItems.map((item) => (
                        <Item key={item.id} item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
                    ))}
                </ul>
            </div>
            <div className="actions">
                <select onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Urutkan berdasarkan urutan input</option>
                    <option value="name">Urutkan berdasarkan nama barang</option>
                    <option value="checked">Urutkan berdasarkan ceklis</option>
                </select>
                <button onClick={() => onClearItems()}>Bersihkan Daftar</button>
            </div>
        </>
    )
}