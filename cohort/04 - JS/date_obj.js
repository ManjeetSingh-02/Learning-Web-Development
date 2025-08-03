const date = new Date();

console.log(date.toLocaleString(undefined, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
}));

function daysAgo(publishedDate) {
  const published = new Date(publishedDate);
  const today = new Date();

  // Calculate the difference in milliseconds
    const diffTime = today - published;

  // Convert milliseconds to days
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

const publishedDate = "2023-07-19T13:16:33Z";
console.log(daysAgo(publishedDate) + " days ago");
