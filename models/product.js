import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import Category from "@/models/category";
import Tag from "@/models/tag";


const productSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        trim: true,
        required: true,
        maxlength: 500,
        text: true, // for text search
  }, slug: {
        type: String,
        lowercase: true,
        index: true,
      },

      author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
      },
      description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 10000,
        text: true,
  }, price: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 50,
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
},
year: {
    type: Number,
  },
  mileage: {
    type: Number
  },
  rentalVType:{
type:String
  },
  rentalVUnit:{
type:String
  },
  gear: {
    type: String
  },
  condition: {
    type: String
  },
  district: {
    type: String
  },
  fuelType: {
    type: String
  },
  carBrand: {
    type: String
  },
  carModel: {
    type: String
  },
  partOrAccessoryType:{
type:String
  },
  vanBrand: {
    type: String
  },
  vanModel: {
    type: String
  },
  lorryBrand: {
    type: String
  },
  lorryModel: {
    type: String
  },
  heavyType:{
type:String
  },
  threeWheelBrand: {
    type: String
  },
  busBrand:{
type:String
  },
  busModel:{
    type:String
      },
  bikeBrand: {
    type: String
  },
  bikeModel: {
    type: String
  },
  bodyType: {
    type: String
  },
  model: {
    type: String,
  },
  engine: {
    type: Number
  },
  fuelType: {
    type: String
  },
tpOne: {
  type: String
},
tpTwo: {
    type: String,
  },
category: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Category",
}, tags: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tag",
}, ],
imageUrl1:{
    type:String
},
imageName1:{
type:String
},
imageUrl2:{
    type:String
},
imageName2:{
type:String
},
imageUrl3:{
    type:String
},
imageName3:{
type:String
},
imageUrl4:{
    type:String
},
imageName4:{
type:String
},
imageUrl5:{
    type:String
},
imageName5:{
type:String
},
sold: {
  type: Number,
  default: 0,
},

},{ timestamps: true });
export default mongoose.models.Product || mongoose.model("Product", productSchema);



// images: [ {
//     public_id: {
//       type: String,
//       default: "",
//     },
//     secure_url: {
//       type: String,
//       default: "",
//     },
// }, ]