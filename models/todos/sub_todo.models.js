import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      requires: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.types.ObjectId,
        ref: 'SubTodo',
      },
    ], // Array of Sub-Todos
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);
