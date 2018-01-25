const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var communitySchema = new Schema({
    name : String,
    _id: Schema.Types.ObjectId,
    Location: String,
    Community_head: String,
});

var streetSchema = new Schema({
    name: String,
    _id: Schema.Types.ObjectId,
    community_id : {type: Schema.Types.ObjectId, ref: "Community"},
    Location: String,
    YOC : Date
});

var familySchema = new Schema({
    name: String,
    _id: Schema.Types.ObjectId,
    Head: String,
    size: Number,
    Street_id: {type: Schema.Types.ObjectId, ref:"Street"},
    annual_income: String
});

var personsSchema = new Schema({
   family_id: {type: Schema.Types.ObjectId, ref: "Family"},
    _id: Schema.Types.ObjectId,
    name: String,
    mothers_name: {type: Schema.Types.ObjectId, ref: "Persons"},
    fathers_name: {type: Schema.Types.ObjectId, ref: "Persons"},
    mothers_maidenname: {type: Schema.Types.ObjectId, ref: "Persons"},
    citizenship: String,
    age: Number,
    Address: String,
    Sex: String,
    Spouse_name: {type: Schema.Types.ObjectId, ref: "Persons"},
    siblings: [{type: Schema.Types.ObjectId, ref: "Persons"}],
    children: [{type: Schema.Types.ObjectId, ref: "Persons"}],
    ExSpouse_name: {type: Schema.Types.ObjectId, ref: "Persons"},
});

var Community = mongoose.model("Community", communitySchema);
var Street = mongoose.model('Street', streetSchema);
var Family = mongoose.model("Family", familySchema);
var Persons = mongoose.model("Persons", personsSchema);
