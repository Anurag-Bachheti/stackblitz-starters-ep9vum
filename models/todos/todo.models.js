import { Timestamp } from 'bson';
import mongoose from 'mongoose';

const todoSchema = new mongoose.schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.types.ObjectId,
        ref: 'SubTodo',
      },
    ], // Array of Sub-Todos
  },
  { Timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
