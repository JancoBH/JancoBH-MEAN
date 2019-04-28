import * as express from 'express';
import TutorialesCtrl from '../controllers/tutoriales/tutoriales';

export default function setRoutes(app) {

  const router = express.Router();

  const tutorialesCtrl = new TutorialesCtrl();

  // Tutoriales
  router.route('/tutoriales').get(tutorialesCtrl.getAllTutoriales);
  router.route('/tutorial/:url').get(tutorialesCtrl.getTutorialByUrl);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
