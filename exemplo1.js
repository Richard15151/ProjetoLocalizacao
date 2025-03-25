async function buscarDados(){
    try{
        const url = "url"+Id;
        const resposta = await fetch(url)
        // impressão de todos os dados da resposta da requisição
        console.log(resposta)
        // conversão do conteúdo da resposta em formato json
        const dados = await resposta.json();
        console.log(dados)

    }catch (erro){
        console.error("Erro ao buscar dados:", erro);
    }
}