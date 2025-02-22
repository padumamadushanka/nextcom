import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import slugify from "slugify";
import queryString from "query-string";  

// exports.adsByUser = async(req, res) => {
//     console.log(req.query.page+"page number")
//     const PAGE_SIZE = 6;
//     const page = parseInt(req.query.page || "0");
//     const total = await Ad.countDocuments({ userId: req.profile._id });
//     console.log(total)
//     Ad.find({ userId: req.profile._id }).populate('userId')
//         .sort([['createdAt', 'desc']])
//         .limit(PAGE_SIZE)
//          .skip(PAGE_SIZE * page)
//         .exec((err, ads) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: 'No Ads Found'
//                 });
//             }

//             res.json({totalPages: Math.ceil(total / PAGE_SIZE),ads});
//         });
// };

export async function GET(req) {
    await dbConnect();
    const searchParams = queryString.parseUrl(req.url).query;
    const { page,userId } = searchParams || {};
    const pageSize = 5;
    try {
      const currentPage = Number(page) || 1;
      const skip = (currentPage - 1) * pageSize;
      const totalProducts = await Product.countDocuments({ userId: userId });
      const products = await Product.find({ userId: userId })
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
  } }