const router = require('express').Router();
const Movie = require('../models/Movie');
const items =require('../config/items.json');



router.get('/items', async (req, res)=>{
    try {
        const page = parseInt(req.query.page) -1 ||0;
        const limit = parseInt(req.query.limit) || 5;
        const search = req.query.search || "";
        let sort = req.query.sort || "rating";
        let genre = req.query.genre || "All";

        // best practice is to have the genre saved in the database
const genreOptions = [
"Action",
"Romance",
"Drama",
"Crime",
"Thriller",
];
genre === "All"
? (genre =[...genreOptions]) :
(genre = req.query.genre.split(","));
req.query.sort ? (sort =req.query.sort.split(",")) : (sort =[sort]);

let sortBy ={};
if(sort[1]){
    sortBy[sort[0]] = sort[1];
}else{
    sortBy[sort[0]] = 'asc';
}

const items = await Movie.find({name:{$regex:search, $options:'i'}})
.where("genre")
.in([...genre])
.sort(sortBy)
.skip(page*limit)
.limit(limit);

const total = await Movie.countDocuments({
    genre: {$in:[...genre]},
    name:{$regex:search, $options:"i"},
});

const response ={
    error:false,
    total,
    page:page +1,
    limit,
    genres:genreOptions,
    items,
}

res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: true, message:"Internal Server Error"});
        }
});

// const insertItems = async () => {
//     try {
//         const docs = await Movie.insertMany(items);
//         return Promise.resolve(docs);
//     } catch (error) {
//         return Promise.reject(error);
//     }
// };


// insertItems()
// .then((docs)=> console.log(docs))
// .catch((error)=> console.log(error))



module.exports = router;