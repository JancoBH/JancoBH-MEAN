import * as express from 'express';
import { Tutoriales } from '../models/tutoriales.model';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('api index');
});

router.get('/tutoriales', async (req, res) => {
  const tutoriales = await Tutoriales.find();
  res.json(tutoriales);
});

router.get('/tutoriales/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const tutoriales = await Tutoriales.findById(id);
    res.json(tutoriales);
  } catch (error) {
    next(error);
  }

});

export default router;
