const express = require('express')
const router = express.Router()
const kitty = require('../db/model/user')

router.get('/number', (req, res) => {

    kitty.find().then(list => {

        if (list.length > 0) {
            let id = list.length + 1
            kitty.insertMany({
                id: id,
                name: '喵星人2',
            }).then(data => {
                res.send({ err: 0, list: list })
            }).catch(err => {
                console.log(err);
            })
        } else {
            console.log('数据已存在');
        }
    }).catch(err => {
        console.log(err);
    })
})
router.get('/add', (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send('ok')
})
module.exports = router