async function enviarDados() {
    try {
      const dados = {
        title: 'Novo Todo',
        completed: false
      };
  
      const resposta = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      });
  
      const resultado = await resposta.json();
      console.log('Dados enviados:', resultado);
    } catch (erro) {
      console.error('Erro ao enviar dados:', erro);
    }
  }
  
  enviarDados();