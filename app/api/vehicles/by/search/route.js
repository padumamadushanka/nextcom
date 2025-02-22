import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import slugify from "slugify";
import queryString from "query-string";  

// export async function GET(req) {
//     await dbConnect();
//     const searchParams = queryString.parseUrl(req.url).query;
//     const { page } = searchParams || {};
//     const pageSize = 5;
//     try {
//       const currentPage = Number(page) || 1;
//       const skip = (currentPage - 1) * pageSize;
//       const totalProducts = await Product.countDocuments({});
//       const products = await Product.find({})
//         .skip(skip)
//         .limit(pageSize)
//         .sort({ createdAt: -1 });
//       return NextResponse.json(
//         {
//           products,
//           currentPage,
//           totalPages: Math.ceil(totalProducts / pageSize),
//   },
//         { status: 200 }
//       );
//     } catch (err) {
//       console.log(err);
//       return NextResponse.json(
//         {
//           err: err.message,
//   },
//         { status: 500 }
//       );
//   } }
// export async function GET(req, context) {
//     await dbConnect();
//     console.log("here params  "+context.params.id)
//     const id= await context.params.id;
//     try {
//       const product = await Product.findOne({ _id: id });
//       return NextResponse.json(product);
//     } catch (err) {
//       console.log(err);
//       return NextResponse.json(
//         {
//           err: err.message,
//   },
//         { status: 500 }
//       );
//   } }

export async function POST(req)  {
    const data  = await req.json();
   console.log(data)
    await dbConnect();
    const PAGE_SIZE = 4;
    const page = parseInt(data.currentPage || "0");

    let order = data.order ? data.order : 'desc';
    let sortBy = data.sortBy ? data.sortBy : '_id';
    let limit = data.limit ? parseInt(data.limit) : 100;
    let skip = parseInt(data.skip);
    let findArgs = {};

    // console.log(order, sortBy, limit, skip, req.body.filters);
    // console.log("findArgs", findArgs);

    for (let key in data.filters) {
        if (data.filters[key].length > 0) {
            if (key === 'price'||key === 'landSize') {
                // gte -  greater than price [0-10]
                // lte - less than
                findArgs[key] = {
                    $gte: data.filters[key][0],
                    $lte: data.filters[key][1]
                };
            } 
            else {
                findArgs[key] = data.filters[key];
            }
        }
    }
   
    function isEmpty(findArgs) {
        for(var prop in findArgs) {
            if(findArgs.hasOwnProperty(prop))
                return false;
        }
    
        return true;
    }
    if(isEmpty(data.filters)){
        
        try {
            const total = await Product.countDocuments({ "category": "679bcfc6ab51ea31fd0d123f" });
        const data= await Product.find({ "category": "679bcfc6ab51ea31fd0d123f" }).populate('author')
        .sort([[sortBy, order]])
        .limit(PAGE_SIZE)
        .skip(PAGE_SIZE*page)
        // console.log("this is data >>> "+data)
        return NextResponse.json({
                    totalPages: Math.ceil(total / PAGE_SIZE),
                    size: data.length,
                    data
                });
        } catch (error) {

            return NextResponse.json({
                            error: 'Ads not found'
                        });
            
        }
        
        // const total = await Product.countDocuments({ "category": "679bcfc6ab51ea31fd0d123f" });
        // Product.find({ "category": "679bcfc6ab51ea31fd0d123f" }).populate('author')
        // .sort([[sortBy, order]])
        // .limit(PAGE_SIZE)
        // .skip(PAGE_SIZE*page)
        // .exec((err, data) => {
            
        //     if (err) {
        //         return NextResponse.json({
        //             error: 'Ads not found'
        //         });
        //     }
        //     return NextResponse.json({
        //         totalPages: Math.ceil(total / PAGE_SIZE),
        //         size: data.length,
        //         data
        //     });
        // });
    }else{
        

        try {
            const total = await Product.countDocuments(findArgs);
        const data= await Product.find(findArgs).populate('author')
        .sort([[sortBy, order]])
        .limit(PAGE_SIZE)
        .skip(PAGE_SIZE*page)

        return NextResponse.json({
            totalPages: Math.ceil(total / PAGE_SIZE),
            size: data.length,
            data
        });
            
        } catch (error) {
            return NextResponse.json({
                error: 'Ads not found'
            });
        }
        
    }

};