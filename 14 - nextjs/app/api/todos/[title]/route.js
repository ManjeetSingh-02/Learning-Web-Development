import { NextResponse } from 'next/server';

import { connectToDatabase } from '@/db';
import Todo from '@/models/Todo';

export async function GET(_request, context) {
  try {
    // check if the database is connected
    await connectToDatabase();

    // get the title from the request context
    const { title } = await context.params;

    // check if todo exists in the database
    const existingTodo = await Todo.find({ title });
    if (!existingTodo) return NextResponse.json({ error: 'Todo not found' }, { status: 404 });

    // return the todo as a JSON response
    return NextResponse.json(existingTodo, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: 'DB connection failed' }, { status: 500 });
  }
}
