import { NextResponse } from 'next/server';

import { connectToDatabase } from '@/db';

export async function GET(_request) {
  try {
    // check if the database is connected
    await connectToDatabase();

    // return the health status of the API
    return NextResponse.json({ message: 'Server is running' }, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: 'DB connection failed' }, { status: 500 });
  }
}
