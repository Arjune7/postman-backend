import express from 'express'
import historyRouter from './routes/historyRoutes'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api", historyRouter)


app.listen(3000, () =>
  console.log(`
🚀 Server running !!`
))