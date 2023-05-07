const mongoose = require("mongoose");

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://devgsilv:rdL4aUdt6vwGnGex@cluster0.lvxrcvl.mongodb.net/?retryWrites=true&w=majority"
            );
        console.log("Connected to DB MongoDB Atlas")

    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;
