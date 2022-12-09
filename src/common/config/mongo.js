const DB_NAME = process.env.DB_NAME || 'test'
const mongoConfig = {
  dbName: DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true
}

export default mongoConfig