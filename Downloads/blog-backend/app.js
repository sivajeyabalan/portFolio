const express = require('express');
const app = express();
const cors = require('cors');  // Import cors
require('dotenv').config();  // Import dotenv
app.use(express.json());  // Use express.json
app.use(cors());  // Use cor



const authRoutes = require('./routes/authRoute');  // Import authRoutes
const userRoutes = require('./routes/userRoute');  // Import userRoutes
const postRoutes = require('./routes/postRoute');  // Import postRoutes
const commentRoutes = require('./routes/commentRoute');  // Import commentRoutes
const middleware = require('./middleware/authenication');  // Import middleware
app.use('/api/auth', authRoutes);  // Use authRoutes
//tested


app.use ( '/api/users', middleware , userRoutes );  // Use userRoutes
app.use ( '/api/posts', middleware ,postRoutes );  // Use postRoutes
app.use ( '/api/comments', middleware , commentRoutes );  // Use commentRoutes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(8080, () => {
console.log(`Server is running on port 8080`);
});
