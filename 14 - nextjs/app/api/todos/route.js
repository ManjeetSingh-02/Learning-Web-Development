import { NextResponse } from 'next/server';

import { connectToDatabase } from '@/db';
import Todo from '@/models/Todo';

export async function GET(_request) {
  try {
    // check if the database is connected
    await connectToDatabase();

    // get all todos from the database
    const allTodos = await Todo.find({});

    // return the todos as a JSON response
    return NextResponse.json(allTodos, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: 'DB connection failed' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    // check if the database is connected
    await connectToDatabase();

    // get the title from the request body
    const { title } = await request.json();

    // if no title is provided, return an error
    if (!title || title.trim() === '')
      return NextResponse.json(
        { error: 'Title is required for creation of a TODO' },
        { status: 400 }
      );

    // check if another todo with the same title exists
    const existingTodo = await Todo.findOne({ title });
    if (existingTodo)
      return NextResponse.json(
        { error: 'Todo with same title already exists, please try again' },
        { status: 400 }
      );

    // create a new todo
    const newTodo = await Todo.create({ title });

    // check if the todo was created successfully
    if (!newTodo)
      return NextResponse.json(
        { error: 'Something went wrong while creating todo' },
        { status: 500 }
      );

    // return the newTodo as a JSON response
    return NextResponse.json(newTodo, { status: 200 });
  } catch (error) {
    NextResponse.json({ error: 'DB connection failed' }, { status: 500 });
  }
}
