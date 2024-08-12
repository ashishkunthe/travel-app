export default function Item({ item, handleDelete, toggle }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <li>
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => toggle(item.id)}
          ></input>
          {item.quantity}
          <span></span>
          {item.description}
        </li>
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}
