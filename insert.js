const dbConnect = require('./mongo_conn');

const insert=async ()=>{
    const db = await dbConnect();
    const result = await db.insertOne(       //insertMany
        {product:'Eraser',qty:50 }
    );
    console.log(result)

}
insert();