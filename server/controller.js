require('dotenv').config();
const {DATABASE_URL} = process.env;

const Sequelize = require('sequelize')

const sequelize = new Sequelize(DATABASE_URL, {
    dialect:'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

let dinners = [];
let userDB = dinners
let list = []

module.exports = {

    seed: (req, res) => {
        sequelize.query(`
            drop table if exists dinners;
            drop table if exists userDB;
            drop table if exists userList;

            create table dinners (
                dinner_id serial primary key, 
                name varchar
            );

            insert into dinners (name)
            values ('Tacos'),
            ('Pizza'),
            ('Burgers'),
            ('Sandwiches'),
            ('Chicken'),
            ('Pasta'),
            ('Fish'),
            ('Breakfast');
                

            `).then(() => {
                console.log('DB seeded!')
                userDB.push(sequelize.query(`select * from dinners;`))
                res.sendStatus(200)
            }).catch(err => console.log('error seeding DB', err))

            
        },

       
    getOption: (req, res) => {
        
        let randomIndex = Math.floor(Math.random() * userDB.length);
        let randomDinner = userDB[randomIndex];
        // userDB.push(randomDinner);
      
        res.status(200).send(randomDinner);
    },

    getAllOptions: (req, res) => {
        // sequelize.query(`select * from dinners;`)
        //     .then(dbRes => 
            //     res.status(200).send(dbRes.data))
            // .catch(err => console.log(err))
        // console.log(dinners);    
        res.status(200).send(userDB);
    },

    deleteOption: (req, res) => {
        // console.log(req.params)
        const {id} = req.params;
        userDB.splice(+id, 1);
        res.status(200).send(userDB);
       
    },

    addOption: (req, res) => {
        // console.log(dinners)
        console.log(req.body.userValue)
        const {id} = req.body.userValue;
        userDB.push(req.body.userValue);
        res.status(200).send(userDB);

    },

    saveOption: (req, res) => {
        // console.log(req.params)
        const {id} = req.params;
        // const {userValue} = req.body;
        list.push(id);
        res.status(200).send(id)
        },

    getList: (req, res) => {
        // console.log(list);    
        res.status(200).send(list);
    },

    deleteListItem: (req, res) => {
        // console.log(req.params)
        const {id} = req.params;
        list.splice(+id, 1);
        res.status(200).send(list);
       
    },

    getDinners: (req, res) => {
        sequelize.query(`SELECT name FROM dinners;`)
            .then(dbRes => {
                // console.log(dbRes[0])
                let [ a, b, c, d, e, f, g, h] = dbRes[0]

// console.log(a)

let { name:z } = a
let { name:y } = b
let { name:x } = c
let { name:w } = d
let { name:v } = e
let { name:u } = f
let { name:t } = g
let { name:s } = h

console.log(z)

dinners.push(s, t, u, v, w, x, y, z)


                
                
                    // userDB.push(...dbRes[0])
                    const set = new Set(dinners);
                    dinners = [...set]
                
                    res.status(200).send(userDB)
                
                
            })
    },

    

}




