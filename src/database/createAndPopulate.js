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
    "senha_cadastro" varchar(12) NOT NULL,
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

/**
 * script de inserção de dados base (seria os usuarios ja cadastrados / o DAO ira permitir q a infor
 * mação passada pelo usuario seja inserida no bd automaticamente)
 */
const ADD_CADASTRO_USUARIOS_DATA = `
INSERT INTO cadastro_usuarios (nome_usuario, sobrenome, email_cadastro, cpf, senha_cadastro, telefone)
VALUES 
    ('João', 'Silva', 'joao.silva@gmail.com', '01256685202', '123456789121', '11123456781'),
    ('Maria', 'Santos', 'maria.santos@hotmail.com', '12663358995', '125687496351', '21987654321'),
    ('Pedro', 'Oliveira', 'pedro.oliveira@yahoo.com.br', '45669985636', '31456789011');
`

const ADD_ENDERECO_DATA = `
INSERT INTO endereco (logradouro, numero, complemento, cidade, uf, cep) 
VALUES
    ('Rua Principal', '42', 'Apto 101', 'São Paulo', 'SP', '01234567'),
    ('Avenida Secundária', '18', 'Casa', 'Rio de Janeiro', 'RJ', '20000123'),
    ('Estrada Distante', '7', 'Sala 3B', 'Belo Horizonte', 'MG', '30005678');
`

/**
 * Function que aplica a criação das tabelas
 */
function criaTabelaCadastroUsuarios() {
    Database.run(CADASTRO_USUARIOS_TABLE, (error)=> {
       if (error) {
            console.log("Erro ao criar tabela de Cadastro Usuários")
        } else {
            console.log("Tabela Cadastro Usuários criada com sucesso!")
        }
    });
}

function criaTabelaEndereco(){
    Database.run(ENDERECO_TABLE, (error)=> {
        if (error) {
             console.log("Erro ao criar tabela de Endereço")
         } else {
             console.log("Tabela Endereço criada com sucesso!")
         }
     });
}

/**
 * Function que polula via SQLite as tabelas
 */
function populaTabelaCadastroUsuarios() {
    Database.run(ADD_CADASTRO_USUARIOS_DATA, (error)=> {
       if (error) {
        console.log("Erro ao popular tabela de Cadastro Usuários")
        }
        else {
            console.log("Tabela Cadastro Usuários populada com sucesso!")
        }
    });
}

function populaTabelaEndereco() {
    Database.run(ADD_ENDERECO_DATA, (error)=> {
       if (error) {
        console.log("Erro ao popular tabela de Endereço")
        }
        else {
            console.log("Tabela Endereçi populada com sucesso!")
        }
    });
}


/**
 * Roda as funções de criação de tabela e população em serie (Uma após a outra)
 */
Database.serialize(()=>{
    criaTabelaCadastroUsuarios();
    criaTabelaEndereco();
    populaTabelaEndereco();
    populaTabelaCadastroUsuarios();
})