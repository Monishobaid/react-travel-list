import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "charger", quantity: 12, packed: true },
];

export default function App() {
// lifting up the state so that it could be rendered on packinglist
  const [items,setItem] = useState([]);

  function handleItem(item){
    setItem((items)=>[...items,item])
  };

  function handleDeleteItem(id){
    setItem((items)=>(items).filter((item)=>item.id!==id))
  }

  return (
    <div className="app">
      <Logo />
      <Form  onAddItems={handleItem}/>
      <PackingList items={items} onDeleteItems={handleDeleteItem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}

function Form({onAddItems}) {
  const [description, setDescription] = useState(" ");
  const [quantity, setQuantity] = useState(1);


  function handleSubmit(e) {
    if(!description) return ;
    const data = {
      quantity,
      description,
      id:Date.now(),
      packed:false,
    }
    onAddItems(data);
    setDescription("");
    setQuantity(1);
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>

      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." value={description} onChange={(e)=>setDescription(e.target.value)}></input>
      <button>Add</button>
    </form>
  );
}

function PackingList({items, onDeleteItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item hello={item} onDeleteItems={onDeleteItems} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ hello, onDeleteItems }) {
  return (
    <li>
      <span style={hello.packed ? { textDecoration: "line-through" } : {}}>
        {hello.description} {hello.quantity}
      </span>
      <button style={{ color: "red" }} onClick={()=>{onDeleteItems(hello.id)}}>X</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on list</em>
    </footer>
  );
}
