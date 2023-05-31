const dbConnect = require('./mongo_conn');

const main=async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray(); //in find can mention search data
    console.log(data);
}
main();