import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
  res.json({
    test: 'Olá',
  });
});

export default usersRouter;
