import React from 'react';

export default function App({ data }) {
  return React.createElement('div', { style: { padding: '20px' } }, [
    React.createElement('h1', { key: 'title' }, 'Person List'),
    React.createElement(
      'ul',
      { key: 'person-list' },
      data.map(p =>
        React.createElement(
          'li',
          { key: p.id },
          React.createElement('p', { key: p.id }, `${p.name} is ${p.age} years old.`)
        )
      )
    ),
  ]);
}
