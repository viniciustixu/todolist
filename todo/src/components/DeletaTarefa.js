export default function DeletaTarefa(props) {
  const deletaItem = () => {
    localStorage.removeItem(props.itemKey);
  };

  return (
    <button onClick={deletaItem}>X</button>
  );
}
