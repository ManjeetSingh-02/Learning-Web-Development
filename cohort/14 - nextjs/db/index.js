import mongoose from 'mongoose';

// check if the environment variable for MongoDB URI is set
if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

// create a global variable to cache the connection
let cached = global.mongoose;

// if the global variable is not set, initialize it
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export async function connectToDatabase() {
  // if the connection is already established, return it
  if (cached.conn) return cached.conn;

  // if the connection is not established, create a new one
  if (!cached.promise) cached.promise = mongoose.connect(process.env.MONGODB_URI, {});

  try {
    // wait for the connection to be established
    cached.conn = await cached.promise;
  } catch (error) {
    // if there is an error, reset the cached connection
    cached.promise = null;
  }

  // if the connection is established, return it
  return cached.conn;
}
