import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connDB from './config/db.config.js'

const app = express()
const PORT = process.env.PORT || 1001

app.use(cors())
app.use(express.json())

// api

// app listening
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}/`)
    connDB()

})





