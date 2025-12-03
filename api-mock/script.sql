-- cria BD --
create database sistema_produtos;

-- para usar o BD --
use sistema_produtos;

-- cria a tabela produtos com campos basicos  --
create table produtos(
id int auto_increment primary key, -- ID ÙNICO
nome varchar (100) not null, -- nome do produto
email varchar(120) not null, -- email (exemplo geterico)
telefone varchar(20), -- telefone
cpf varchar (14), -- cpf
endereco varchar(150) -- Endereço simples
);

-- inseri dois registros --
insert into produtos (nome,email,telefone,cpf,endereco)values
('Eduardo ramos','edu.ramos@orutos.com','1215451654','123.456.789-14', 'Rua Orutos F'),
('Leandro Carvalho','leandrocnovais45454@gmai.com','11955112566','398-745-635-21', 'Rua americo');

-- Seleciona o registro  onde o Id = 1
select*from produtos where id = 1;

-- Seleciona o registro  onde o Id = 2
select*from produtos where id =2;

select*from produtos;
