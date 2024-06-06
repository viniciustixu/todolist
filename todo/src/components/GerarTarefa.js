import React, { useState, useEffect } from 'react';

export default function GerarTarefa() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const pegarItems = () => {
      const itemsFromLocalStorage = [];

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const item = JSON.parse(localStorage.getItem(key));
        itemsFromLocalStorage.push(item);
      }
      setItems(itemsFromLocalStorage);
    };

    pegarItems();
  }, []);



  return (
    <>
      {items.map((item, index) => (
        <div key={index} style={{ border: "1px, solid, black", color: "blue", marginBottom: "20px" }}>
          <p>Nome: {item.nome}</p>
          <p>Comentário: {item.comentario}</p>
          <p>DeadLine: {item.deadline}</p>
        </div >
      ))
      }
    </>
  );
}
