import React from 'react';
// import { Sequelize } from "sequelize"

export default function about(){
    return(<>
    <section className='banner'>
        <div><h1 className='Titulo'>Carlos</h1></div>
        <div><img className='Img' src="user.webp"/></div>
      </section>
      <section className='informacoes'>
        <br/>
        <h2>Sobre Mim</h2><br/>
        <p>Olá eu sou Carlos Daniel, e eu sou o desenvolvedor desse site<br/>Meus hobbies favoritos são jogar games, cozinhar e programar.<br/>Caso queira saber mais sobre mim, abra a página do blog, onde eu posto atualizações sobre mim regularmente!</p>
        <h2>Sobre este website</h2>
        <p><b>Sobre: </b>Essa página que você vê no momento, com informações sobre mim, é a página inicial, além dessa possui outras 3 paginas diferentes para explorar!</p>
        <p><b>Anotações: </b>Uma página para criar e visualizar minhas anotações, apenas para pessoas que possuem acesso.</p>
        <p><b>Blog: </b>Uma página onde eu escrevo atualizações sobre meu dia a dia para todos poderem visualizar. Caso você esteja interessado em saber mais sobre mim essa é a pagina que você procura!</p>
        <p><b>Notícias: </b>Uma página onde eu escrevo resenhas e compartilho notícias que me interessam.</p>
        <p>Parra acessar essas páginas utilize a barra de navegação no topo dessa página</p>
      </section>
    </>)
}

// Para testar o pacote Sequelize

//const connection = new Sequelize(
//   process.env.DATABASE_NAME,
//   process.env.DATABASE_USER,
//   process.env.DATABASE_PASSWORD,
//   {
//       host: process.env.DATABASE_URL,
//       port: process.env.DATABASE_PORT,
//       dialect: "mysql",
//       logging: false,
//       define: {
//           // prevent sequelize from pluralizing table names
//           freezeTableName: true,
//       },
//   }
// )
