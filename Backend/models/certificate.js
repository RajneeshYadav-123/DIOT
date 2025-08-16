const mongoose=require('mongoose');
const { schema } = require('./Team');

const CertificateSchema=new mongoose.Schema({
     certificate_no:{
        type:String,
        required:true,
     },
     Participent_Name:{
       type:String,
       required:true,
     },
     Participent_Roll_No:{
        type:String,
        required:true,
     },
     Participent_Year:{
        type:String,
        required:true
     }
})

module.exports=mongoose.model('Certificate',CertificateSchema);



