import express from 'express'
import { addHistory, getHistory } from '../controllers/historyController'
const historyRouter = express.Router()

historyRouter.route("/History").get(getHistory).post(addHistory)

export default historyRouter