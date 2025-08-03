// total sales - reduce
let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];
let allSales = salesData.reduce((acc, item) => acc + item.price, 0);
console.log(allSales);

// stocks less than 50 - filter
let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];
let stocks = inventory.filter((item) => item.stock < 50);
console.log(stocks);

// find most active user - reduce
let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 12 },
  { user: "Charlie", activityCount: 33 },
];
let users = userActivity.reduce((mAU, cU) => (mAU.activityCount > cU.activityCount ? mAU : cU));
console.log(users);

// return all categories with their total expenses - reduce
let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];
let expReport = expenses.reduce((report, expense) => {
  report[expense.category] = (report[expense.category] || 0) + expense.amount;
  return report;
}, {});
console.log(expReport);

// return incompleted tasks adn sort by their priority - filter
let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];
let allTasks = tasks.filter((task) => task.completed === false).sort((a, b) => a.priority - b.priority);
console.log(allTasks);

// return all movies with their average ratings - map
let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];
let allRatings = movieRatings.map((movie) => {
  let totalValue = movie.ratings.reduce((acc, rating) => acc + rating);
  let average = totalValue / movie.ratings.length;
  return { title: movie.title, averageRatings: average };
});
console.log(allRatings);
