const dbConnect = require('./mongo_conn');

const deleteData = async () => {
    const data = await dbConnect();
    const result = await data.deleteOne(    //deleteMany
        { product: 'Papers' }
    );
    if (result.acknowledged) {
       // console.warn(result)
       console.log('deleted')
    }
}
deleteData();