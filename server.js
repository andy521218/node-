const session = require('express-session')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express();
const db = require('./db/connect')
const number = require('./router/number')


//cors 详见express 张培跃博客
//图片上传 multer插件


app.use(cors())
app.use(session({
    secret: 'ZFPX',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30
    }
}))
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/user', number)
app.use((req, res) => {
    res.status(404);
    res.send('NOT FOUND!');
});

app.listen(3000, () => {
    console.log('3000');
})