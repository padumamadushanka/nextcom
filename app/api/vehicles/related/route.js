// exports.listRelated = (req, res) => {
//     let limit = req.query.limit ? parseInt(req.query.limit) : 10;

//     Ad.find({ _id: { $ne: req.ad }, category: req.ad.category ,carModel:req.ad.carModel,})
//         .sort([['_id', 'desc']])
//         .limit(limit)
//         .exec((err, ads) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: 'Ads not found'
//                 });
//             }
//             res.json(ads);
//         });
// };
import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";

export async function POST(req)  {
    await dbConnect();
    const data  = await req.json();
    const carModel=data.carModel
    const busBrand=data.busBrand
    const bikeModel=data.bikeModel
    const threeWheelBrand=data.threeWheelBrand
    const lorryBrand=data.lorryBrand
    const rentalVType=data.rentalVType
    const id=data.id
   console.log(data)
  // console.log("server data")
    let limit =  10;
     try {
            const data= await Product.find({ _id: { $ne: id }, carModel:carModel,bikeModel:bikeModel,rentalVType:rentalVType,threeWheelBrand:threeWheelBrand,lorryBrand:lorryBrand,busBrand:busBrand})
            .sort([['_id', 'desc']])
            .limit(limit)
            //console.log("SERVER RES + "+data)
            
            return NextResponse.json({
                        data
                    });
            } catch (error) {
    
                return NextResponse.json({
                                error: 'Ads not found'
                            });
                
            }

   

};