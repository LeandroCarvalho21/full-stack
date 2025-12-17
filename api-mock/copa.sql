-- Criar DB 
create database	copa_mundo;

-- usar o DB copa_mundo
use copa_mundo;

-- cria a tabela seleções com 3 colunas
create table selecoes (
id int auto_increment primary key,
selecao varchar (50) not null,
grupo char (1) not null
);

-- seleciona a tabela selecoes
select*from selecoes;

insert into selecoes(selecao,grupo)value
('Brasil','A'),
('França','B'),
('Ilhas de salomão','C'),
('Nigéria','D'),
('Nova Zelândia','E'),
('Japão','C');

insert into selecoes (selecao,grupo)value
('Belgica','A');

drop table selecoes;