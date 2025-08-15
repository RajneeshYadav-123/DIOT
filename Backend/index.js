const express = require('express');
const app = express();

const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

const database = require('./config/database');
const { cloudinaryConnect } = require('./config/cloudinary');


dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));



app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp",
}));



cloudinaryConnect();
database.connect();

const teams=require('./routes/Teams');

app.use("/api/v1/team",teams);

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Your server is up and running....',
  });
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
