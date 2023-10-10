<h1>CineSamuraiAPI</h1>

<h3>Projeto em grupo modulo 4 - API para o Back-end do nosso site CineSamurai</h3> 

<p>O CineSamurai é um cinema que precisa adquirir tecnologia para auxiliar na venda de ingressos, a fim de facilitar e agilizar o atendimento aos clientes. Nesta primeira etapa do projeto, foi desenvolvido o backend dessa futura plataforma, utilizando a API REST com Node.js e o framework Express. </p>


<h2>🚀 Começando</h2>

<p>Este projeto foi criado com o intuito de construir um sistema para gerenciar reservas de ingressos, vendas e outras operações relacionadas a um cinema que realiza a venda de ingressos online. Nesse contexto, a modelagem do banco de dados foi essencial para definir como as informações serão armazenadas e relacionadas entre si, incluindo entidades e principais objetos de dados, como filmes, salas, sessões, clientes e ingressos. Além disso, trabalhamos na definição da lógica de negócios, que é a parte do sistema responsável por determinar como essas entidades interagem e quais operações podem ser realizadas, como a compra de ingressos, o gerenciamento do estoque de assentos, a geração de bilhetes e a autenticação de clientes.</p>


<h2>🔧 Instalação </h2>
<p>Para executar o projeto localmente, siga estas etapas:</p>
<ul>
<li>Clone esse repositório: https://github.com/samuelkutz/CineSamurai.git </li>
<li>Navegue até o diretório do projeto: CineSamurai </li>
<li>Instale as dependências usando npm [Node.js](https://nodejs.org/en): npm Install</li>
<li>Inicie o servidor:  npm start </li>
</ul>

<h2>🔧 Bibliotecas Utilizadas </h2>
<p>cpf-cnpj-validator -> Utilizada para realizar a validação do CPF inserido. </p>
(Documentação)[https://www.npmjs.com/package/cpf-cnpj-validator]
<p>cep-promise -> Utilizada para realizar a validação do CEP inserido</p>
(Documentação)[https://www.npmjs.com/package/cep-promise]

# Exemplo de utilização da API - CRUD de Usuários

Esta documentação descreve as operações CRUD (Create, Read, Update, Delete) disponíveis para a entidade "Usuários" em nossa API para demonstração. Essas operações permitem gerenciar informações de usuários em nosso sistema.
Para isso, afim de exemplificar nesta documentação, utilizamos o software Insomnia, mas pode-se utilizar outros similares. Lembrando que os dados utilizados são fictícios, apenas para fins de estudos.

## Endpoints

### Listar Todos os Usuários

**Método**: GET
**Rota**: `/usuarios`

**Descrição**: Retorna todos os usuários cadastrados no sistema.

**Exemplo de Requisição**:

GET - http://localhost:3000/usuarios


**Exemplo de Resposta (200 OK)**:

```json
[
    {
		"id_cadastro": 1,
		"nome_usuario": "João",
		"sobrenome": "Silva",
		"email_cadastro": "joao.silva@gmail.com",
		"cpf": "01256685202",
		"senha_cadastro": "12345678",
		"telefone": "11123456781",
		"id_endereco_fk": null
	},
	{
		"id_cadastro": 2,
		"nome_usuario": "Maria",
		"sobrenome": "Santos",
		"email_cadastro": "maria.santos@hotmail.com",
		"cpf": "12663358995",
		"senha_cadastro": "12568749",
		"telefone": "21987654321",
		"id_endereco_fk": null
	}
]
```

### Buscar Usuário pelo ID

**Método**: GET
**Rota**: `/usuarios/:id`

**Descrição**: Retorna um usuário com base no ID fornecido.

**Parâmetros de Rota**:
- `id` (integer): O ID do usuário a ser recuperado.

**Exemplo de Requisição**:
GET- http://localhost:3000/usuarios/2

**Exemplo de Resposta (200 OK)**:

```json
{
	"id_cadastro": 2,
	"nome_usuario": "Maria",
	"sobrenome": "Santos",
	"email_cadastro": "maria.santos@hotmail.com",
	"cpf": "12663358995",
	"senha_cadastro": "12568749",
	"telefone": "21987654321",
	"id_endereco_fk": null
}
```



### Inserir Novo Usuário

**Método**: POST
**Rota**: `/usuarios`

**Descrição**: Insere um novo usuário no sistema.

**Corpo da Solicitação (JSON)**:

```json
{	
	"nome_usuario": "Eimael",
	"sobrenome": "Bonito Lindo",
	"email_cadastro": "eimael.bonito@gmail.com",
	"cpf": "01256685250",
	"senha_cadastro": "12345678",
	"telefone": "11123456888",
	"id_endereco_fk": null
}
```

**Você verá a mensagem: "Usuário cadastrado com sucesso"**

### Atualizar Usuário Existente

**Método**: PUT
**Rota**: `/usuarios/:id`

**Descrição**: Atualiza os dados de um usuário existente com base no ID fornecido.

**Parâmetros de Rota**:
- `id` (integer): O ID do usuário a ser atualizado.

**Corpo da Solicitação (JSON)**:

```json
{	
	"nome_usuario": "Eimael",
	"sobrenome": "Bonito Lindo Maravilhoso",
	"email_cadastro": "eimael.bonito@gmail.com",
	"cpf": "01256685250",
	"senha_cadastro": "12345678",
	"telefone": "11123456888",
	"id_endereco_fk": null
}
```

**Exemplo de Requisição**

**PUT - http://localhost:3000/usuarios/31**

**Exemplo de Resposta (200 OK): "Campos atualizados"**

### Excluir Usuário

**Método**: DELETE
**Rota**: `/usuarios/:id`

**Descrição**: Exclui um usuário com base no ID fornecido.

**Parâmetros de Rota**:
- `id` (integer): O ID do usuário a ser excluído.

**Exemplo de Requisição**:

DELETE - http://localhost:3000/usuarios/31

**Exemplo de Resposta (200 OK)**:
"Campos atualizados"






<h2>🛠️ Construído com:</h2>
<h3>Ferramentas utilizadas</h3>
<ul>
<li>SQLite</li>
<li>VsCode</li>
<li>Node.js</li>
</ul>

<h2>✒️ Autores</h2>
<ul>
<li>Larisa Schmidt </li>
<li>Laisa Marcelino</li>
<li>Lucas Rolando </li>
<li>Erica Fernanda</li>
<li>Samuel Kutz</li>
</ul>


