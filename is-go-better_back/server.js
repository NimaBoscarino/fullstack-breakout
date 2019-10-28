const express = require('express')
const app = express()
const PORT = 3001

const { fetchAllStackPairs } = require('./db_helpers/stack_pairs')

const val = "hahaha!"

app.get('/api/hello', (req, res) => {
    res.send(val)
})

// const stackPairs = [
//     {
//         stack_a: {
//             name: 'Go'
//         },
//         stack_b: {
//             name: 'Node'
//         },
//     },
//     {
//         stack_a: {
//             name: 'Rails'
//         },
//         stack_b: {
//             name: 'Go'
//         },
//     },
//     {
//         stack_a: {
//             name: 'Rails'
//         },
//         stack_b: {
//             name: 'Node'
//         },
//     },        
// ]

app.get('/api/stackPairs', (req, res) => {
    // FETCH FROM DATABASE
    fetchAllStackPairs()
        .then(rows => {
            const stackPairs = rows.map(r => {
                return ({
                    stack_a: {
                        name: r.stack_a,
                    },
                    stack_b: {
                        name: r.stack_b,
                    },
                })
            })
            res.json(stackPairs)
        })

    // SEND TO FRONT END

})

app.get('/stack/:name', (req, res) => {
    res.json({
        name: req.params.name,
        info: 'Lorem ipsum dolor sit amet'
    })
})

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on ${PORT}`)
})