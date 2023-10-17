import express from 'express'
import historyRouter from './routes/historyRoutes'
const app = express()

app.use(express.json())
app.use("/api", historyRouter)


app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000`
))