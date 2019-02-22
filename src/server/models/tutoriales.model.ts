import { Schema, model } from 'mongoose';

export const TutorialesSchema = new Schema({
  _id: String,
  title: String,
  desc: String,
  img: String,
  colors: Object,
  createDate: Object
});

export const Tutoriales = model('Tutoriales', TutorialesSchema);
