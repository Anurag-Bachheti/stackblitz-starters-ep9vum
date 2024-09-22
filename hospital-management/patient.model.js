import mongoose from 'mongoose';

const patientSchema = new mongooseSchema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonsedWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: string,
      enum: ['M', 'F', 'O'],
      required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamp: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
