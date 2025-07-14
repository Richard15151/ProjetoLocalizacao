# Onde Estou? Clima e Mapa 🌍
Um projeto interativo que detecta a localização do usuário via navegador e, em seguida, utiliza **APIs** externas (OpenStreetMap e OpenWeatherMap) para exibir a localização exata em um mapa e as condições climáticas atuais. Desenvolvido com **HTML**, **CSS** e **JavaScript**, este projeto foca na integração de geolocalização e consumo de APIs para fornecer informações contextuais.

---

## 🚀 Tecnologias Utilizadas
- Frontend:
HTML5: Estrutura da página web.
CSS3: Estilização da interface, garantindo um visual limpo e responsivo.

- JavaScript: Lógica principal para:
Obter a geolocalização do usuário (API Geolocation do navegador).
Consumir a API do OpenStreetMap (para exibir o mapa e informações de endereço).
Consumir a API do OpenWeatherMap (para obter dados climáticos).
Atualizar dinamicamente o conteúdo da página.

---

## ✨ Recursos Principais
- Detecção de Geolocalização: Pega as coordenadas (latitude e longitude) diretamente do navegador do usuário.

- Exibição de Mapa Interativo: Mostra a localização exata em um mapa, permitindo zoom e arrasto.

- Informações Climáticas Detalhadas: Apresenta dados como temperatura, umidade, velocidade do vento e descrição do clima.

- Endereço Preciso: Converte as coordenadas geográficas em um endereço legível.

- Design Responsivo: A interface se adapta para oferecer uma boa experiência tanto em desktops quanto em dispositivos móveis.

---

## 💡 Propósito do Projeto
Este projeto foi desenvolvido com o objetivo de praticar e aprimorar as habilidades em:

- API de Geolocalização do Navegador: Entender e implementar a obtenção da localização do usuário.

- Consumo de APIs Externas: Realizar requisições assíncronas (usando fetch ou XMLHttpRequest) para múltiplas APIs (OpenStreetMap e OpenWeatherMap) e processar seus retornos (JSON).

- Manipulação do DOM com JavaScript: Atualizar dinamicamente elementos da página com base nos dados obtidos das APIs.

- Tratamento de Erros: Lidar com permissões negadas de geolocalização ou falhas nas requisições de API.

- Integração de Mapas: Incorporar e manipular mapas interativos em uma aplicação web.

---

## 💻 Como Visualizar
Para ver o projeto em seu navegador, siga estes passos:

1. Clone o repositório:

```Bash
  git clone https://github.com/Richard15151/ProjetoLocalizacao.git
```

2. Navegue até a pasta do projeto:

```Bash
  cd ProjetoLocalizacao
```

3. Abra o arquivo index.html em seu navegador de preferência.

Importante: Para que o consumo das APIs de clima e mapa funcione corretamente, você precisará obter suas próprias chaves de API:

- OpenWeatherMap: Registre-se em OpenWeatherMap para obter uma chave de API.

- OpenStreetMap: Geralmente não exige chave para uso básico de Nominatim ou Leaflet, mas para Mapbox/MapTiler com base em OSM pode ser necessário.

Insira suas chaves de API no arquivo JavaScript (script.js ou onde for configurado) nos locais indicados.

---

## 🛠️ Estrutura do Projeto
- index.html: Contém a estrutura HTML da página, incluindo elementos para exibir o mapa, informações de localização e dados climáticos.

- style.css: Contém todas as regras CSS para estilização do layout e responsividade.

- script.js: Contém toda a lógica JavaScript, desde a obtenção da geolocalização até o consumo das APIs e a atualização da interface.

---

## 👨‍💻 Criador
Projeto desenvolvido por Richard de Oliveira Ribeiro
- Github: https://github.com/Richard15151
- Linkedin: https://www.linkedin.com/in/richard-oliveira-b30a10315/
