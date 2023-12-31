const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "charger", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Far Away</h1>;
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..."></input>
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item hello={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ hello }) {
  return (
    <li>
      <span style={hello.packed ? { textDecoration: "line-through" } : {}}>
        {hello.description} {hello.quantity}
      </span>
      <button style={{ color: "red" }}>X</button>
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
