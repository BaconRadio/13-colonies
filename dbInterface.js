// DB Interface for mongoDB
// Author: PotatoesMakeChips
// GPL3


// Create a DatabaseInterface class to access a mongoDB database
// Structure:
//         const db = new DatabaseInterface('<username>:<password>@<serverURL>/?retryWrites=true&w=majority');
class DatabaseInterface {
    constructor(databaseUrl) {
        // Connect to the DB
        const mongoose = require('mongoose')
            , Schema = mongoose.Schema
            , ObjectId = Schema.ObjectId;
        mongoose.connect(`mongodb+srv://${databaseUrl}`);

        // Setup DB Schema
        const dbSchema = new Schema({
            callsign: { type: String, required: true },
            cw: { type: Boolean, required: true },
            ssb: { type: Boolean, required: true },
            data: { type: Boolean, required: true },
        });

        // Create DB Model
        this.TrackedCallsign = mongoose.model('TrackedCallsign', dbSchema);

        // Return 0 on sucsess
        return 0;
    }

    async addNewCallsign(addCallsign) {
        // Create new callsign document from mongoDB model in constructor and save to DB
        const newCallsign = await new this.TrackedCallsign({
            callsign: addCallsign,
            cw: false,
            ssb: false,
            data: false,
        }).save();

        // returns id of the object in the database on sucsesfull creation of document
        return newCallsign.id;
    }

    async getCallsign(searchCallsign) {
        // Generates and executes search to find the first document matching the supplied callsign
        const callsign = await this.TrackedCallsign.findOne({ callsign: searchCallsign }).exec();
        
        // Formatting the object output as not to return the object in a way that can be used to manipulate the database
        return {
            callsign: callsign.callsign,
            cw: callsign.cw,
            ssb: callsign.ssb,
            data: callsign.data,
        };
    }
    async updateCallsign(updateCallsign, updateData) {
        // Generates and executes search to find the first document matching the supplied callsign
        const callsign = await this.TrackedCallsign.findOne({ callsign: updateCallsign }).exec();

        // Update callsign object with new data DO NOT FAIL TO PROVIDE ALL DATA
        callsign.callsign = updateData.callsign;
        callsign.cw = updateData.cw;
        callsign.ssb = updateData.ssb;
        callsign.data = updateData.data;

        // Saves changes and returns
        return callsign.save();
    };

    async deleteCallsign(deleteCallsign) {
        // Generates and executes search and delete on the first document matching the supplied callsign
        const callsign = await this.TrackedCallsign.deleteOne({ callsign: deleteCallsign }).exec();

        // Returns 404 if no callsigns are deleates
        if (callsign.deletedCount === 0) {
            return 404;
        } else {
            // Returns 0 if callsign is deleated
            return 0;
        }
    }
}