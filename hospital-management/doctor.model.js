import mongoose from 'mongoose';

const doctorSchema = new mongooseSchema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: String,
      default:0,
    },
    worksInHospitals:[{
      type:mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    }
    ]
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
