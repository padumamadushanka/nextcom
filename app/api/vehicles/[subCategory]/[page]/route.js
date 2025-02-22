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


  export async function GET(req) {
    await dbConnect();
    const searchParams = queryString.parseUrl(req.url).query;
    const { page, subCategory } = searchParams || {};
    const pageSize = 5;


    try {
        const currentPage = Number(page) || 1;
        const skip = (currentPage - 1) * pageSize;
        const totalProducts = await Product.countDocuments({"category": subCategory});
        const products = await Product.find({"category": subCategory})
          .skip(skip)
          .limit(pageSize)
          .sort({ createdAt: -1 });
        return NextResponse.json(
          {
            products,
            currentPage,
            totalPages: Math.ceil(totalProducts / pageSize),
    },
          { status: 200 }
        );
      } catch (err) {
        console.log(err);
        return NextResponse.json(
          {
            err: err.message,
    },
          { status: 500 }
        );
    }
    // const pageSize = 5;
    // const PAGE_SIZE = 10;
    // let subCategory = req.query.subCategory
    // const page = parseInt(req.query.page || "0");
    // const total = await Ad.countDocuments({"category": subCategory});
    // Ad.find({ "category": subCategory },{ 'photo': { '$slice': 1 } })
    // .sort([['isLevel1PromoPaid', -1],['isLevel2PromoPaid', -1],['createdAt', 'desc']])
    // .limit(PAGE_SIZE)
    // .skip(PAGE_SIZE * page)
    // .exec((err, ads) => {
    //     if (err) {
    //         return res.status(400).json({
    //             error: 'Products not found'
    //         });
    //     }
    //     res.json({totalPages: Math.ceil(total / PAGE_SIZE),ads});
    // });
};