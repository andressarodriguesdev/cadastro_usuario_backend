import 'dotenv/config'; 
import cors from 'cors'
import express from 'express';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.post('/usuarios', async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const novoUsuario = await prisma.user.create({
      data: { name, age, email }
    });

    return res.status(201).json({
      message: 'Usuário criado com sucesso!',
      user: novoUsuario
    });
  } catch (error) {
    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return res.status(400).json({ error: 'Este e-mail já está cadastrado.' });
    }

    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

app.put('/usuarios/:id', async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: String(req.params.id) },
      data: { name, age, email }
    });

    return res.status(200).json({
      message: 'Usuário atualizado com sucesso!',
      user: updatedUser
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
});

app.get('/usuarios', async (req, res) => {
  let users;

  if (Object.keys(req.query).length > 0) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name || undefined,
        email: req.query.email || undefined,
        age: req.query.age || undefined // aqui continua string
      }
    });
  } else {
    users = await prisma.user.findMany();
  }

  res.status(200).json(users);
});

app.delete('/usuarios/:id', async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: String(req.params.id) }
    });

    return res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao deletar usuário.' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
