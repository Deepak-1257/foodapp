const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://gofood1257:gofood@cluster0.erxvuqu.mongodb.net/gofoodmern?retryWrites=true&w=majority";
const mongoDB = async () => {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err)
            console.log("---", err)
        else {
            console.log("connected successfully");
            const fetched_data = await mongoose.connection.db.collection('food_items');
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory=await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(function(err,catData){
                    if (err)
                         console.log(err);
                     else {
                        global.food_items=data;
                        global.foodCategory=catData;
                     } 
                })
                // if (err)
                //     console.log(err);
                // else {
                //     global.food_items=data;
                //     // console.log(global.food_items)
                // }
            })
        }
    });
}

    module.exports = mongoDB;
  // try {
    //     // mongoose.set("strictQuery", false);
    //    await mongoose.connect(mongoURI);
    //     console.log("Connected to Mongo Successfully!");
    //     catch (error) {
    //     console.log(error);
    //   }
    // }

