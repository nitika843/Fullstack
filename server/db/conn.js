const mangoose = require("mangoose");

const DB ="mongodb+srv://nitikakumari:NTBLnrXss9a3z6Sk@cluster0.msb2c9g.mongodb.net/mernstack?retryWrites=true&w=majority"

mangoose.connect(DB,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => console.log("connection start")).catch((error) => console.log(error.message));