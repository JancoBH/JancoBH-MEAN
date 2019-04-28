import { Schema, model } from 'mongoose';

const tutorialesSchema = new Schema({
  _id: String,
  url: { type: String, unique: true, lowercase: true, trim: true },
  title: String,
  desc: String,
  img: String,
  colors: Array,
  createdDate: Object
});

const Tutoriales = model('Tutoriales', tutorialesSchema);

export default Tutoriales;
