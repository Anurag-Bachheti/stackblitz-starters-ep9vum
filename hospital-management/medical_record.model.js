import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    doctor: [{
      type:{},
      ref:{},
    }],
    patient: {},
    staff: {},
    
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model('MedicalRecord',medicalRecordSchema);
