# Be The Hero

O Be The Hero é uma plataforma fictícia criada na Semana Omnistack 11, promovida pela Rocketseat, cuja função é cadastrar ONG's que cuidam de animais para que elas possam postar casos em que elas precisam de apoio financeiro via dashboard web e esses casos possam ser acessados por um aplicativo onde pessoas poderiam ter os casos listados, com informações, e pudessem acessar cada caso e entrar em contato com a ONG que o postou.

## Linguagem utilizada

<img src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" width="96">

## Tecnologias utilizadas

- **Back-End**
  - Knex
  - Cors
  - Express
  - SQLite3
  - Celebrate
  
- **Front-End Web**
  - ReactJS
  - Axios
  
- **Front-End Mobile**
  - ReactJS
  - React Native
  - Axios
  - Expo

## Como rodar a plataforma

Primeiro, se deve acessar [esse link](https://www.nodejs.org) e instalar o Node.js. 
> Opcional: se quiser, pode instalar também o Yarn, que é uma ótima ferramenta de gestão de pacotes. Para isso, já com o Node.js instalado, basta rodar `npm install -global yarn` no terminal.

Em seguida, basta abrir o terminal numa pasta qualquer escolhida e rodar `git clone github.com/richardqcarvalho/be-the-hero`.

Feito isso, abra a pasta e rode o seguinte código para a instalação das dependências:

`cd /backend && npm i && cd ../frontend && npm i && cd ../mobile && npm i && cd ../`

Ao fim do processo, toda a base da aplicação vai estar devidamente instalada.

Por fim, teremos que ter três terminais:

 - um para o servidor do backend, que receberá todas as requisições e respostas do dashboard web e do aplicativo mobile:
    - abra um terminal na pasta /backend e rode `npm start`. 
    > Se tiver instalado o Yarn, pode rodar `yarn start`.
    
 - um para o servidor que hospedará localmente o dashboard web:
    - abra um terminal na pasta /frontend e rode `npm start`. 
    > Se tiver instalado o Yarn, pode rodar `yarn start`.
    
 - e um para o servidor do Expo que possilibitará acessar o aplicativo mobile no celular:
    - abra um terminal na pasta /mobile e rode `npm start`. 
    > Se tiver instalado o Yarn, pode rodar `yarn start`.
  
Neste momento, você já deve estar com uma aba `localhost:3000` com a página de login do dashboard web aberto. Lá, você pode criar uma ONG fictícia para ser exibida na plataforma no link "Não tenho cadastro". Ao criar a ONG, um alerta aparecerá no topo da tela mostrando uma id. Anote-a, pois é com ela que você entrará no dashboard da ONG criada.

Você também deve ter aberta no navegador uma aba `localhost:19002` com a página do Expo para acessar o aplicativo mobile. Para acessá-lo, você deve instalar o aplicativo Expo, disponível na [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) e na [App Store](https://apps.apple.com/us/app/expo-client/id982107779).

Ao abrí-lo, você deve apertar em "Scan QR Code" e deve apontar para o QR code ao lado esquerdo da aba `localhost:19002`, na parte de baixo. Espere um tempo até que ele construa a visualização e **voilà**!

