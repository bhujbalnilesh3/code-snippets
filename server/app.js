require('dotenv').config();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const express = require('express');
const bodyParser = require('body-parser');
const Category = require('./schema/categorySchema');

let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/healthcheck', (request, response) => {
	response.json({
		status: 200,
		message: 'Success'
	});
});

app.get('/api/categories', (request, response) => {
    Category.find({}).then(data => {
        response.status(200).json(data);
    }).catch(err => {
        response.status(500).json({
            status:500,
            message: 'Unable to get categories from collection'
        });
    });
});

app.post('/api/categories', (request, response) => {
    let category = new Category(request.body);
    category.save().then(data => {
        response.status(200).json({
            status: 200,
            id: category._id.toString()
        });
    }).catch(err => {
        response.status(500).json({
            status:500,
            message: 'Unable to save category to collection'
        });
    });
});

app.put('/api/categories/id/:id', (request, response) => {
    let body = request.body;
    let id = request.params.id;
    Category.updateOne({ _id: id }, { 
        name: body.name,
        description: body.description
    }).then(data => {
        response.status(200).json({ 
            status: 200,
            modifiedCount: data.modifiedCount 
        });
    }).catch(err => {
        response.status(500).json({
            status:500,
            message: 'Unable to update category to collection'
        });
    });
});

app.delete('/api/categories/id/:id', (request, response) => {
    let id = request.params.id;
    Category.remove({_id: id}).then(data => {
        response.status(200).json({ 
            status: 200,
            deletedCount: data.deletedCount 
        });
    }).catch(err => {
        response.status(500).json({
            status:500,
            message: 'Unable to remove category from collection'
        });
    });
});

const port = process.env.EXPRESS_PORT || 8080;

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

if(process.env.APP_ENV.toUpperCase() !== 'TEST') {
    mongoose.connect(`mongodb://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`);
    mongoose.connection
        .once('open', () => { console.log('Mongodb connection established'); })
        .on('error', error => { console.warn('Warning', error); });
}
