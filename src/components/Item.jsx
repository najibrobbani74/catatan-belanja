export default function Item({item,onDeleteItem,onToggleItem}) {
    return (
      <li style={item.checked ? { textDecoration: 'line-through' } : {}}>
        <input type="checkbox" checked={item.checked} onChange={()=>onToggleItem(item.id)} />
        <span>{item.quantity} {item.name}</span>
        <button onClick={()=>onDeleteItem(item.id)}>&times;</button>
      </li>
    )
  }