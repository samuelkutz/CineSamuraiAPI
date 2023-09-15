import Database from "./Database.js";

/**
 * Script sql de criação das tabelas (SQLite é Case Sensitive, isto é, diferencia letras)
 */

const CADASTRO_USUARIOS_TABLE = `
CREATE TABLE IF NOT EXISTS "cadastro_usuarios" (
    "id_cadastro" INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    "nome_usuario" varchar(100) NOT NULL,
    "sobrenome" varchar(255) NOT NULL,
    "email_cadastro" varchar(100) NOT NULL,
    "cpf" varchar(11) NOT NULL,
    "senha_cadastro" varchar(8) NOT NULL,
    "telefone" varchar(11) NOT NULL,
    "id_endereco_fk" INTEGER
  );
`

const ENDERECO_TABLE = `
CREATE TABLE IF NOT EXISTS "endereco" (
    "id_endereco" INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    "lougradoro" varchar(100) NOT NULL,
    "numero" varchar(5) NOT NULL,
    "complemento" varchar(100),
    "cidade" varchar(100) NOT NULL,
    "uf" varchar(2) NOT NULL,
    "cep" varchar(8) NOT NULL
  );
`
const FILMES_TABLE = `
CREATE TABLE IF NOT EXISTS "filmes" (
    "id_filme" INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    "nome_filme" varchar(255) NOT NULL,
    "linguagem_originaL" varchar(100) NOT NULL,
    "classificacao_indicativa" varchar(3) NOT NULL,
    "duracao" varchar(10) NOT NULL
  );
`
const PRECO_TABLE = `
CREATE TABLE IF NOT EXISTS "preco" (
    "id_preco" INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    "dia_semana" varchar(3) NOT NULL,
    "valor" float 
  );
`
const PROGRAMACAO_GERAL_TABLE = `
CREATE TABLE IF NOT EXISTS "programacao_geral" (
    "id_pogramacao" int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    "id_filme_fk" int,
    "data_horario" datetime,
    "tipo_linguagem" char,
    "id_preco_fk" int
  );
`
const SALA_TABLE = `
CREATE TABLE IF NOT EXISTS "sala" (
  "id_sala" INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  "capacidade" INTEGER,
  "nome_sala" varchar(100) NOT NULL
);
`
const POLTRONA_TABLE = `
CREATE TABLE IF NOT EXISTS "poltrona" (
  "id_poltrona" int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  "tipo_poltrona" varchar(20) NOT NULL,
  "disponibilidade" boolean
);
`
const SESSAO_TABLE = `
CREATE TABLE IF NOT EXISTS "sessao" (
  "id_sessao" int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  "id_filme_fk" INTEGER,
  "tipo_sessao" varchar(5) NOT NULL,
  "id_programacao_geral_fk" INTEGER,
  "sala_fk" INTEGER,
  "id_poltrona_fk" INTEGER
);
`
/** 
 * script de inserção de dados base (seria os usuarios ja cadastrados / o DAO ira permitir q a infor
 * mação passada pelo usuario seja inserida no bd automaticamente)
 */
const ADD_CADASTRO_USUARIOS_DATA = `
INSERT INTO cadastro_usuarios (nome_usuario, sobrenome, email_cadastro, cpf, senha_cadastro, telefone)
VALUES 
    ('João', 'Silva', 'joao.silva@gmail.com', '01256685202', '12345678', '11123456781'),
    ('Maria', 'Santos', 'maria.santos@hotmail.com', '12663358995', '12568749', '21987654321'),
    ('Pedro', 'Oliveira', 'pedro.oliveira@yahoo.com.br', '45669985636', '31456786','8189012345'),
    ('Ana','Pereira','ana.sousa@yahoo.com.br','36931176080','23456789','6123456789'),
    ('Renata','Ferreira','renata.ferreira@yahoo.com.br','23309887022','12345678','2789012345'),
    ('Camila','Lima','carolina.oliveira@yahoo.com.br','92300528096','23456789','6123456789'),
    ('Guilherme','Ribeiro','guilherme.ribeiro@hotmail.com','27883522043','54678923','8556789012'),
    ('Pedro','Rocha','pedro.rocha@gmail.com','85688225092','54678923','9690123456'),
    ('Marcela','Fernandes','marcela.fernandes@gmail.com','03880758050','34567834','9834567890'),
    ('Rafael','Barbosa','rafael.barbosa@gmail.com','09381192065','23456789','9690123456'),
    ('Igor','Castro','igor.castro@hotmail.com','02869579063','23657891','6590123456'),
    ('Marcelo','Santos','marcelo.santos@gmail.com','20882342096','43568790','1956789012'),
    ('Beatriz','Almeida','beatriz.almeida@yahoo.com.br','33286997080','34567892','2489012345'),
    ('Letícia','Costa','leticia.costa@hotmail.com','09381192065','12547635','7923456789'),
    ('Karina','Santos','karina.santos@hotmail.com','42593909021','45672345','8556789012');
    
`

const ADD_ENDERECO_DATA = `
INSERT INTO endereco (logradouro, numero, complemento, cidade, uf, cep) 
VALUES
    ('Rua Principal', '42', 'Apto 101', 'São Paulo', 'SP', '01234567'),
    ('Avenida Secundária', '18', 'Casa', 'Rio de Janeiro', 'RJ', '20000123'),
    ('Estrada Distante', '7', 'Sala 3B', 'Belo Horizonte', 'MG', '30005678'),
    ('Rua A', '3', 'casa2', 'São Paulo', 'SP', '01234-567'),
    ('Av. B','45','casa3', Rio de Janeiro, 'RJ', '12345-678'),
    ('Rua C','54','ap', 'Belo Horizonte', 'MG', '23456-789'),
    ('Av. D', '23', 'casa1', 'Porto Alegre', 'RS', '34567-890'),
    ('Rua E', '12', 'casa2', 'Salvador', 'BA', '45678-901'),
    ('Av. F', '46', 'casa2', 'Curitiba', 'PR', '56789-012'),
    ('Rua G', '98', 'casa5', 'Manaus', 'AM', '67890-123'),
    ('Av. H', '34, 'casa1', 'Recife', 'PE', '78901-234'),
    ('Rua I','56','casa4', 'Brasília', 'DF', '89012-345'),
    ('Av. J', '65', 'casa7', 'Fortaleza', 'CE', '90123-456'),
    ('Rua K', '78', 'casa3', 'Goiânia', 'GO', '01234-567'),
    ('Av. L', '89', 'casa6', 'Florianópolis', 'SC', '12345-678');
`
const ADD_FILMES_DATA = `
INSERT INTO filmes (nome_filme, linguagem_original, classificacao_indicativa, duração)
VALUES
('Vingadores: Ultimato','Portugues','14','90 minutos'),
('O Poderoso Chefão', 'EUA', 'Portugues','16','120 minutos'),
('Parasita','Portugues','16 ano','90 minutos'),
('Interestelar','Portugues', '12','80 minutos'),
('Pulp Fiction','Inglês','18','90 minutos'),
('A Origem','Portugues', '14','120 minutos'),
('Cidade de Deus','Portugues','18','80 minutos'),
('Clube da Luta','Inglês','18','120 minutos'),
('O Senhor dos Anéis: O Retorno do Rei','Portugues','12','80 minutos'),
('Coringa','Inglês','16 anos','120 minutos'),
('O Pianista','Francês','16','120 minutos'),
('De Volta para o Futuro','Inglês','Livre','80 minutos'),
('A Lista de Schindler','Inglês','14','90 minutos'),
('Toy Story','Inglês','Livre','120 minutos'),
('Matrix','Inglês','16','80 minutos');
`
const ADD_PRECO_DATA = `
INSERT INTO preços (dia_semana, valor) 
VALUES
('segundafeira','12,00'),
('quintafeira','18,00'),
('terçafeira','15,00'),
('sextafeira','24,00'),
('quartafeira','15,00'),
('terçafeira','15,00'),
('quintafeira','18,00'),
('quartafeira','15,00'),
('sextafeira','24,00'),
('quintafeira','18,00'),
('terçafeira','15,00'),
('quartafeira','15,00'),
('segundafeira','12,00'),
('sextafeira','24,00'),
('quintafeira','18,00');
`
const ADD_PROGRAMACAO_GERAL_DATA = `
INSERT INTO programacao_geral (id_filme_fk, data_horario,tipo_linguagem)
VALUES
(1,'2023-09-10 13:00','comédia'),
(2,2023-05-10 19:00','drama'),
(3,'2023-07-10 20:00','ficção científica'),
(4,'2023-04-10 11:00','animação'),
(5,'2023-02-10 14:00','terror'),
(6,'2023-09-10 17:00','Ação'),
(7,'2023-08-10 21:00','documentário'),
(8,'2023-10-10 23:00','aventura'),
(9,'2023-01-10 22:00','suspense'),
(10,'2023-02-10 18:00','comédia'),
(11,'2023-05-10 19:00','romance'),
(12,'2023-02-10 15:00','animação'),
(13,'2023-08-10 12:00','comédia'),
(14,'2023-07-10 14:00','animação'),
(15,'2023-04-10 13:00','Ação');
`

/**
 * Function que aplica a criação das tabelas
 */
function criaTabelaCadastroUsuarios() {
    Database.run(CADASTRO_USUARIOS_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de Cadastro Usuários")
        } else {
            console.log("Tabela Cadastro Usuários criada com sucesso!")
        }
    });
}

function criaTabelaEndereco() {
    Database.run(ENDERECO_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de Endereço")
        } else {
            console.log("Tabela Endereço criada com sucesso!")
        }
    });
}

function criaTabelaFilmes() {
    Database.run(FILMES_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de Filmes")
        } else {
            console.log("Tabela Filmes criada com sucesso!")
        }
    });
}

function criaTabelaPreco() {
    Database.run(PRECO_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de Preço")
        } else {
            console.log("Tabela Preço criada com sucesso!")
        }
    });
}

function criaTabelaProgramacaoGeral() {
    Database.run(PROGRAMACAO_GERAL_TABLE, (error) => {
        if (error) {
            console.log("Erro ao criar tabela de Programação Geral")
        } else {
            console.log("Tabela Programação Geral criada com sucesso!")
        }
    });
}

/**
 * Function que polula via SQLite as tabelas
 */
function populaTabelaCadastroUsuarios() {
    Database.run(ADD_CADASTRO_USUARIOS_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Cadastro Usuários")
        }
        else {
            console.log("Tabela Cadastro Usuários populada com sucesso!")
        }
    });
}

function populaTabelaEndereco() {
    Database.run(ADD_ENDERECO_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Endereço")
        }
        else {
            console.log("Tabela Endereço populada com sucesso!")
        }
    });
}

function populaTabelaFilmes() {
    Database.run(ADD_FILMES_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Filmes")
        }
        else {
            console.log("Tabela Filmes populada com sucesso!")
        }
    });
}

function populaTabelaPreco() {
    Database.run(ADD_PRECO_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Preço")
        }
        else {
            console.log("Tabela Preço populada com sucesso!")
        }
    });
}

function populaTabelaProgramacaoGeral() {
    Database.run(ADD_PROGRAMACAO_GERAL_DATA, (error) => {
        if (error) {
            console.log("Erro ao popular tabela de Programação Geral")
        }
        else {
            console.log("Tabela Programação Geral populada com sucesso!")
        }
    });
}


/**
 * Roda as funções de criação de tabela e população em serie (Uma após a outra)
 */
Database.serialize(() => {
    criaTabelaCadastroUsuarios();
    criaTabelaEndereco();
    criaTabelaFilmes();
    criaTabelaPreco();
    criaTabelaProgramacaoGeral();
    populaTabelaEndereco();
    populaTabelaCadastroUsuarios();
    populaTabelaFilmes();
    populaTabelaPreco();
    populaTabelaProgramacaoGeral();
})
