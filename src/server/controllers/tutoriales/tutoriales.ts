import Tutoriales from '../../models/tutoriales.model';

export default class TutorialesCtrl {

  tutorialesModel = Tutoriales;

  getAllTutoriales = (req, res) => {
    this.tutorialesModel.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.status(200).json(docs);
    }).sort([['createdDate', -1]]);
  }

  getTutorialByUrl = (req, res) => {
    this.tutorialesModel.findOne({ url: req.params.url }, (err, item) => {
      if (err) { return console.error(err); }
      res.status(200).json(item);
    });
  }

}
