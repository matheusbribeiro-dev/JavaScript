//FETCH API
/*Permite fazermos requisições HTTP através do método fetch(). Este método retorna
a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a
resposta, que é um objeto do tipo Response.*/

fetch("./arquivo.txt").then(function (response) {
  console.log(response); // Response HTTP (Objeto)
});

//RESPONSE
/*O objeto Response, possui um corpo com o conteúdo da resposta. Esse corpo pode
ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam
outras promises.*/

fetch("./arquivo.txt")
  .then(function (response) {
    return response.text();
  })
  .then(function (corpo) {
    console.log(corpo);
  });

//SERVIDOR LOCAL
/*O fetch faz uma requisição HTTP/HTTPS. Se você iniciar um site local diretamente
pelo index.html, sem um servidor local, o fetch não irá funcionar.*/

fetch("c:/files/arquivo.txt")
  .then((response) => {
    return response.text();
  })
  .then((corpo) => {
    console.log(corpo);
  }); // erro

//Se dermos um espaço após o objeto ou pularmos linha, o método continua funcionando.

//.JSON()
/*Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript
  Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de
  um objeto js. .json() transforma um corpo em json em um objeto JavaScript.*/

fetch("https://viacep.com.br/ws/01001000/json/")
  .then((response) => response.json())
  .then((cep) => {
    console.log(cep.bairro, cep.logradouro);
  });

//.TEXT()
//Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.

const styleElement = document.createElement("style");

fetch("./style.css")
  .then((response) => response.text())
  .then((style) => {
    styleElement.innerHTML = style;
    document.body.appendChild(styleElement);
  });

//HTML E .TEXT()
/*Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e
inserir em uma div com o innerHTML. A partir dai podemos manipular esses dados
como um DOM qualquer.*/

const div = document.createElement("div");

fetch("./sobre.html")
  .then((response) => response.text())
  .then((htmlBody) => {
    div.innerHTML = htmlBody;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerText = titulo.innerText;
  });

//.BLOB()
/*Um blob é um tipo de objeto utilizado para representação de dados de um arquivo.
O blob pode ser utilizado para transformarmos requisições de imagens por exemplo.
O blob gera um URL único.*/

fetch("./imagem.png")
  .then((response) => response.blob())
  .then((imgBlob) => {
    const blobUrl = URL.createObjectURL(imgBlob);
    console.log(blobUrl);
  });

//.CLONE()
/*Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada.
Por isso existe o método clone, caso você necessite transformar uma resposta em
diferentes valores.*/

fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
  const cloneResponse = response.clone();
  response.json().then((json) => {
    console.log(json);
  });
  cloneResponse.text().then((text) => {
    console.log(text);
  });
});

//.HEADERS
/*É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado
iterável então podemos utilizar o forEach para vermos cada um deles.*/

fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
  response.headers.forEach(console.log);
});

//.STATUS E .OK
/*Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um 
valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.*/

fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
  console.log(response.status, response.ok);
  if (response.status === 404) {
    console.log("Página não encontrada");
  }
});

//.URL E .TYPE
//.url retorna o url da requisição. .type retorna o tipo da reposta.

fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
  console.log(response.type, response.url);
});

//types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// error: erro de conexão
// opaque: no-cors, não permite acesso de outros sites

//METHOD
//GET

//Puxa informação, utilizado para pegar posts, usuários e etc.

//POST

//Utilizado para criar posts, usuários e etc.

//PUT

//Geralmente utilizado para atualizar informações.

//DELETE

//Deleta uma informação.

//HEAD

//Puxa apenas os headers.

//GET
//GET irá puxar as informações da URL. Não é necessário informar que o método é GET, pois este é o padrão.

const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url, {
  method: 'GET'
})
.then(r => r.json())
.then(r => console.log(r))

//POST
//POST irá criar uma nova postagem, utilizando o tipo de conteúdo especificado no headers e utilizando o conteúdo do body.

fetch(url, {
  method: 'POST',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))

//PUT
//PUT irá atualizar o conteúdo do URL com o que for informado no conteúdo do body.

fetch(url, {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '{"titulo": "JavaScript"}'
})
.then(r => r.json())
.then(r => console.log(r))

//HEAD
//HEAD puxa apenas os headers. É uma requisição mais leve pois não puxa o body.

fetch(url, {
  method: 'HEAD',
})
.then(response => {
  response.headers.forEach(console.log);
  console.log(response.headers.get('Content-Type'));
});

/*HEADERS
Cache-Control

Tempo que o arquivo deve ficar em cache em segundos. Ex: public, max-age=3600

Content-Type

Tipo de conteúdo. Ex: text/html; charset=utf-8. Indicar o tipo de arquivo principalmente em métodos POST e PUT.

Lista de Headers

https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers */


/*CORS
Cross-Origin Resource Sharing, gerencia como deve ser o compartilhamento de recursos entre diferente origens.

É definido no servidor se é permitido ou não o acesso dos recursos através de scripts por outros sites. Utilizando o
Access-Control-Allow-Origin.

Se o servidor não permitir o acesso, este será bloqueado. É possível passar por cima do bloqueio utilizando um proxy.

CORS é um acordo entre browser / servidor ou servidor / servidor. Ele serve para dar certa proteção ao browser,
mas não é inviolável.*/

fetch(url)
.then(r => r.text())
.then(r => {
  div.innerHTML = r;
  console.log(div);
});