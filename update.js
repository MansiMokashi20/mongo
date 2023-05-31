const dbConnect = require('./mongo_conn');

const updateData=async ()=>{
    const data = await dbConnect();
    const result = await data.updateOne(        //update -for all
        {product:'Eraser'}, {
            $set: {product:'Papers', qty:25 }
        }
    );
    console.warn(result)
}
updateData();