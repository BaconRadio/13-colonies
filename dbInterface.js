

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

        // Create DB Models
        this.TrackedCallsign = mongoose.model('TrackedCallsign', dbSchema);

        return 0;
    }

    async addNewCallsign(addCallsign) {
        const newCallsign = await new this.TrackedCallsign({
            callsign: addCallsign,
            cw: false,
            ssb: false,
            data: false,
        }).save();
        return newCallsign.id;
    }

    async getCallsign(searchCallsign) {
        const callsign = await this.TrackedCallsign.findOne({ callsign: searchCallsign }).exec();
        return {
            callsign: callsign.callsign,
            cw: callsign.cw,
            ssb: callsign.ssb,
            data: callsign.data,
        };
    }
    async updateCallsign(updateCallsign, updateData) {
        const callsign = await this.TrackedCallsign.findOne({ callsign: updateCallsign }).exec();
        callsign.callsign = updateData.callsign;
        callsign.cw = updateData.cw;
        callsign.ssb = updateData.ssb;
        callsign.data = updateData.data;
        return callsign.save();
    };

    async deleteCallsign(deleteCallsign) {
        const callsign = await this.TrackedCallsign.findOne({ callsign: deleteCallsign }).exec();
        if (callsign.deletedCount === 0) {
            return 404;
        } else {
            return 0;
        }
    }
}

const db = new DatabaseInterface('<key>');
db.deleteCallsign('m0abc').then(test => console.log(test));