const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

export default {
  port: 3000,
  dbUri: `mongodb+srv://${user}:${password}@cluster0.lg812.mongodb.net/tasks_Database?retryWrites=true&w=majority&appName=Cluster0`,
};
