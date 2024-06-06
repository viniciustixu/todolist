export default function CriarTarefa() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      nome: formData.get('nome'),
      comentario: formData.get('comentario'),
      deadline: formData.get('deadline')
    };
    // Tratamento de dados
    localStorage.setItem(data.nome, JSON.stringify(data));
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="iNome">Nome: </label>
        <input type="text" id="iNome" name="nome" required />

        <label htmlFor="iComentario">Comentário: </label>
        <input type="text" id="iComentario" name="comentario" />

        <label htmlFor="iDeadLine">DeadLine: </label>
        <input type="text" id="iDeadLine" name="deadline" />

        <input type="submit" value="Aplicar" />
        {<button>Cancelar</button> /*Botão deve cancelar e voltar a pagina 1 */}
      </form>
    </>
  );
};
