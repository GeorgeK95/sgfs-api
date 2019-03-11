// const MongoClient = require('mongodb').MongoClient
//
// // Note: A production application should not expose database credentials in plain text.
// // For strategies on handling credentials, visit 12factor: https://12factor.net/config.
// const PROD_URI = "mongodb://<dbuser>:<dbpassword>@<host1>:<port1>,<host2>:<port2>/<dbname>?replicaSet=<replicaSetName>"
// const MKTG_URI = "mongodb://<dbuser>:<dbpassword>@<host1>:<port1>,<host2>:<port2>/<dbname>?replicaSet=<replicaSetName>"
//
// const M_LAB = "mongodb+srv://GeorgeK95:GeorgeK95pass@cluster0-gaclu.gcp.mongodb.net/intern-tasks?retryWrites=true"
//
// function connect(url) {
//     return MongoClient.connect(url, {useNewUrlParser: true}).then(db => {
//         var car = {
//             make: 'Mercedes',
//             model: 'E 220 CDI',
//             engine: {cubic: 2200, hp: 174}
//         }
//
//         db.collection('cars').insertOne(car, function (err, res) {
//             if (err) throw err;
//             Logger.log('Car successfully added to db.')
//             Logger.log(res)
//         })
//     })//.db('cars')
// }
//
// module.exports = async function () {
//     return await Promise.all([connect(M_LAB)])
// }