import momngoose from 'mongoose'

const connDB = async () => {
    try{
        await momngoose.connect(process.env.MONGO_URI)
        console.log("DB connecetd sucessfully....")
    }catch(error){
        console.error("Error while connecting DB",error.message)
        process.exit(1)
    }
}

export default connDB

