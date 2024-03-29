import express from 'express';
import mongodb from 'mongodb';

const port = 8080;
const app = express();
const dbUrl = 'mongodb://localhost/crudwithredux';

mongodb.MongoClient.connect(dbUrl, function (err, db) {

	app.get('/api/games', (req, res) => {
		db.collection('games').find({}).toArray((err, games) => {
			res.json({ games });
		})
	});

	app.listen(port, () => console.log(`Server is running on localhost:${port}`));
})



