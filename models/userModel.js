import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'ID is required'],
    unique: true,
    min: [1, 'ID must be a positive number']
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [50, 'Name must not exceed 50 characters']
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [0, 'Age must be a non-negative number']
  }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
