// captura a referência aos elementos de resultado
const geolocation = document.getElementById('geolocation')
const address = document.querySelector('#address') //seleciona por tudo: id, classe, propiedade

//Criar as variáveis de latitude e longitude
let latitude =0;
let longitude =0;

//função que pega a localização
function pegarLocalizacao(){
    // verifica se o navegador suporta o recurso de geolocalização
    if(navigator.geolocation){
        //Se suportar, tenta obter a posição atual do usuário
        //o método getCurrentPosition recebe duas funções:
        //-A primeira (mostrarPosicao) é chamada se a localização for obtida com sucesso
        //-A segunda (mostraErro) é chamada se a localização der erro
        //-A terceira (opcional) permite personalizações, nível de precisão, tempo 

        navigator.geolocation.getCurrentPosition(mostrarPosicao, mostrarErro, {
                enableHighAccuracy: true, //pede mais precisão
                timeout: 10000, //espera até 10 segundos para obter a localização
                maximumAge: 0, //garante que a posição não seja uma antiga salva no cache
            }
        )
    }else{
        geolocation.innerHTML = 'Geolocalização não é suportada por este navegador'
    }
}

//função chamada se ouver erro para obter a geolocalização
function mostrarErro(error){
    switch(error.code){
        case error.PERMISSION_DENIED:
            geolocation.innerText = '⛔ O usuário negou o acesso a localização';
            break;
        case error.POSITION_UNAVAILABLE:
            geolocation.innerText = '❌ A localização não está disponível';
            break;
        case error.TIMEOUT:
            geolocation.innerHTML = '⏳ A solicitação expirou';
            break;
        default:
            geolocation.innerText = '⚠ Erro desconhecido';
    }
}

function mostrarPosicao(position){
    console.log(position)
    latitude = position.coords.latitude
    longitude = position.coords.longitude
    console.log(latitude, longitude)
    geolocation.innerHTML = ` 
    Latitude: ${latitude} <br>
    Longitude: ${longitude}<br>
    <a href="https://www.google.com.br/maps/@${latitude},${longitude},20z?entry=ttu" target='_blank'><h4>Ver no Google Maps</h4></a>
    `
    atualizaMapa(latitude, longitude)
}

//função ao clicar no botão buscar endereço para buscar o endereço usando a API do OpenStreetMap

async function buscarEndereco(){
    //Verifica se as coordenadas foram obtidas, se um for null, da erro
    if (latitude === null || longitude === null){
        address.innerHTML = "⚠ Primeiro obtenha as coordenadas!";
        return;
    }

    //Faz requisição a API
    try{
        //Monta a url com as coordenadas obtidas
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=pt-br`;

        //chama a API e espera pela resposta
        const resposta = await fetch(url);

        //Transforma a respostra em JSON
        const dados = await resposta.json();
        console.log(dados);

        //extrai as informações de endereço para a variável endereco
        const endereco = dados.address;
        console.log(endereco);

        //exibe o endereço formatado
        address.innerHTML=`
        <h3>📍 Detalhes do endereço:</h3>
        País: ${endereco.country || "N/A"}<br>
        Estado: ${endereco.state || "N/A"}<br>
        Cidade: ${endereco.city || endereco.town || endereco.village || "N/A"}<br>
        Bairro: ${endereco.suburb || "N/A"}<br>
        Rua: ${endereco.road || "N/A"}<br>
        CEP: ${endereco.postcode || "N/A"}<br>
        <a href="https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}" target="_blank">
        <h4>🌍 Ver no OpenStreetMap</h4>
        </a>
        `;
    } catch (erro) {
        address.innerHTML = "❌ Erro ao buscar o endereço!";
        console.error("Erro ao buscar dados:", erro);
    };
}

let mapa = L.map('mapa').setView([-23.9828992, -48.8669184], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapa);

function atualizaMapa(latitude, longitude){
    mapa.setView([latitude, longitude],19) //passa latitude e longitude para o mapa
    L.marker([latitude, longitude]) //marca um ponto, com a latitude e longitude
        .addTo(mapa)
        .bindPopup("📍Você está aqui")
        .openPopup()
}

async function buscarclima(){
    const climaElemento = document.getElementById("clima");
    //Verifica se as coordenadas foram obtidas, se um for null, da erro
    if (latitude === null || longitude === null){
        address.innerHTML = "⚠ Primeiro obtenha as coordenadas!";
        return;
    }

    //Faz requisição a API
    try{
        //Monta a url com as coordenadas obtidas
        const chave = "b1a56e376518545dfb32e9dbfb439f2d"
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${chave}&units=metric`;

        //chama a API e espera pela resposta
        const resposta = await fetch(url);

        //Transforma a respostra em JSON
        const dados = await resposta.json();
        console.log(dados);

        //extrai as informações de endereço para a variável endereco
        const clima = dados.main;
        console.log(clima);

        const Temperatura = clima.temp.toFixed(2);

        //exibe o endereço formatado
        climaElemento.innerHTML=`<p>
        <h3>📍 Detalhes do clima:</h3>
        <a>
        Temperatura: ${Temperatura}C°<br>
        </a>
        </p>
        `;
        console.log("Dados do clima recebidos:", clima);
    } catch (erro) {
        clima.innerHTML = "❌ Erro ao buscar o clima!";
        console.error("Erro ao buscar dados:", erro);
    };
}
