import express from 'express';

const app = express();

app.get('/api/details', (req, res) =>{
    const details = [
        {
            id: 1,
            name: "Istanbul",
            country : "Turkiye"
        },
        {
            id: 2,
            name: "Karachi",
            country : "Pakistan"
      
        },
        {
            id: 3,
            name: "Tashkent",
            country : "Uzbekistan"
      
        }
    ]
    res.send(details);
} );

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`);
})