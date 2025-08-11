# 📌 Cadastro de Usuários - API REST

Projeto **backend** desenvolvido para gerenciamento de usuários, permitindo **criar, listar, atualizar, deletar e filtrar** cadastros.  
Utiliza **JavaScript**, **Express**, **Prisma ORM** e **MongoDB**.  
Os testes de requisições foram feitos utilizando o **Thunder Client**.

---

## 🚀 Tecnologias Utilizadas

- **JavaScript (Node.js)** – Lógica da aplicação.
- **Express** – Criação das rotas e endpoints.
- **Prisma ORM** – Mapeamento e manipulação dos dados.
- **MongoDB** – Banco de dados não relacional.
- **Thunder Client** – Testes da API.

---

## 📂 Funcionalidades

- Criar usuário (`POST /usuarios`)
- Listar todos os usuários (`GET /usuarios`)
- Buscar usuário por filtro (ex: nome, idade) (`GET /usuarios?filtro=valor`)
- Atualizar usuário (`PUT /usuarios/:id`)
- Deletar usuário (`DELETE /usuarios/:id`)

---

## 📦 Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```
2. **Instale as dependências**
   ```bash
   npm install
   ```
3. **Configure o banco de dados**
 ```bash
DATABASE_URL="mongodb+srv://usuario:senha@servidor/nomeBanco?retryWrites=true&w=majority"
```
4. **Execute as migrações (Prisma)**
```bash
npx prisma migrate dev
```
5. **Inicie o servidor**
```bash
npm run dev
```
O servidor rodará por padrão em: http://localhost:3000

## 📌 Rotas da API

### Criar usuário

POST /usuarios

<img width="1700" height="432" alt="Image" src="https://github.com/user-attachments/assets/da1bad72-cacd-4a6a-ae23-c7999851695f" />

### Listar usuários

GET /usuarios

<img width="1700" height="574" alt="Image" src="https://github.com/user-attachments/assets/c9d24d55-a6f8-4522-aa05-e90ac366d057" />

### Filtrar usuários

GET /usuarios?name=João

<img width="1705" height="374" alt="Image" src="https://github.com/user-attachments/assets/0763ce71-739a-4a51-bd22-08d9fe8113d6" />

### Atualizar usuário

PUT /usuarios/ID_DO_USUARIO

<img width="1705" height="392" alt="Image" src="https://github.com/user-attachments/assets/1b91ccd3-0385-4633-91f2-0becd2386303" />

### Deletar usuário

DELETE /usuarios/ID_DO_USUARIO

<img width="1701" height="279" alt="Image" src="https://github.com/user-attachments/assets/d07944ca-984a-4110-8c40-c9cb51777a60" />

## 🛠 Testes

Todos os endpoints foram testados usando o Thunder Client (extensão do VSCode).

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

