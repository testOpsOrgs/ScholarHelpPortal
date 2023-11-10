import mongoose from "mongoose";


const uploadSchema = mongoose.Schema(
    {
        uploaderName:{
            type: String,
            require: true
        },
        AdminID:{
            type: String,
            require: true
        },
        programYear:{
            type: Number,
            enum:['2Y','4Y']
        },
        yearOf:{
            type: Number,
            enum:[2016,2017,2018,2019,2020,2021,2022],
            require: true,
        },
        semester:{
            type: Number,
            enum:[1,2,3,4,5,6,7,8]
           
        },
        subjects:{
            type: String,          
            require:true
        }
    }
)


const File = mongoose.model('File',uploadSchema);
export default File;