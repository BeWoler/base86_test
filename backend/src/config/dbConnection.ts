import mongoose from 'mongoose';
import { errors } from '../error/errors';

const connectionToDB = async (dbUrl: string) => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(dbUrl);
    console.log('Success');
  } catch (e) {
    throw new Error(errors.DB_CONNECTION_ERROR.message);
  }
};

export default connectionToDB;
