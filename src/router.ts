import express from 'express';

const router = express();

router.get('/', (req, res) => {
  res.json({
    resposta: 'olá33',
  });
});

export default router;
