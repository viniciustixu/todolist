import React, { useState, useEffect } from 'react';
import DeletaTarefa from './DeletaTarefa';

export default function GerarTarefa() {

  const [items, setItems] = useState([]);


  useEffect(
    () => {
      const todosOsItensLS = [];

      for (let i = 0; i < localStorage.length; i++) {
        const chave = localStorage.key(i);
        const item = JSON.parse(localStorage.getItem(chave));
        todosOsItensLS.push(item);
      }
      setItems(todosOsItensLS);
    }, []
  );



  return (
    <>
      {items.map((item, index) => (
        <div key={index} style={{ border: "1px, solid, black", color: "blue", marginBottom: "20px" }}>
          <p>Nome: {item.nome}</p>
          <p>Comentário: {item.comentario}</p>
          <p>DeadLine: {item.deadline}</p>
          <DeletaTarefa itemKey={item.nome} />
        </div>
      ))
      }
    </>
  );
}
