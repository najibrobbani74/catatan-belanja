import { useState } from "react";
export default function AddForm({onAddItem}) {
    const [name,setName] = useState('');
    const [quantityNow,setQuantityNow] = useState(1)
    const numQuantity = [...Array(10)].map((_,i)=>(<option key={i} value={i+1}>{i+1}</option>))
    function addItem(){
      if(!name)return;
      const newItem = {
        id: Date.now(),
        name: name,
        quantity: quantityNow,
        checked: false
      }
      onAddItem(newItem)
      setName('')
      setQuantityNow(1)
      // alert(quantityNow+' '+name+' added')
    }
    return (
      <form className="add-form" onSubmit={(e)=>{e.preventDefault();addItem()}}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select onChange={(e)=>setQuantityNow(Number(e.target.value))} value={quantityNow}>
            {numQuantity}
          </select>
          <input type="text" placeholder="nama barang..." value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <button>Tambah</button>
      </form>
    )
  }