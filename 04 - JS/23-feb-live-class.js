let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let totalExpenses = expenses.reduce((report, expense) => {
  report[expense.category] = (report[expense.category] || 0) + expense.amount;
  return report;
}, {});

console.log(totalExpenses);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingTasks = tasks.filter((task) => task.completed === false).sort((a, b) => a.priority - b.priority);
console.log(pendingTasks);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let averageRatings = movieRatings.map((movie) => {
  let average = Number((movie.ratings.reduce((acc, rating) => acc + rating, 0) / movie.ratings.length).toFixed(2));
  return { title: movie.title, averageRating: average };
});

console.log(averageRatings);

let p1 = {
  n: "abc",
  g: function () {
    console.log(this.n);
  },
};

let p2 = {
  n: "xyz",
};

p1.g();
p1.g.call(p2);
p1.g.bind({ n: "asfdfbgd" })();
