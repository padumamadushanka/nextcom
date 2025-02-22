import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
import Category from "@/models/category";
import queryString from "query-string";

export async function GET(req) {
  await dbConnect();
  const { productSearchQuery, page = 1, limit = 2 } = queryString.parseUrl(req.url).query;

  try {
    const currentPage = parseInt(page, 10) || 1;
    const resultsPerPage = parseInt(limit, 10) || 2;
    const skip = (currentPage - 1) * resultsPerPage;

    // Search categories matching query
    const categories = await Category.find({
      name: { $regex: productSearchQuery, $options: "i" },
    });

    const categoryIds = categories.map((category) => category._id);

    // Fetch products based on search query
    const products = await Product.find({
      $or: [
        { title: { $regex: productSearchQuery, $options: "i" } },
        { description: { $regex: productSearchQuery, $options: "i" } },
        { category: { $in: categoryIds } },
      ],
    })
      .populate("category", "name")
      .sort({ createdAt: -1 })
      .skip(skip) // Pagination: Skip previous pages
      .limit(resultsPerPage); // Limit results per page

    // Get total product count for pagination
    const totalProducts = await Product.countDocuments({
      $or: [
        { title: { $regex: productSearchQuery, $options: "i" } },
        { description: { $regex: productSearchQuery, $options: "i" } },
        { category: { $in: categoryIds } },
      ],
    });

    return NextResponse.json({
      products,
      totalProducts,
      currentPage,
      totalPages: Math.ceil(totalProducts / resultsPerPage),
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err: "Server error. Please try again." }, { status: 500 });
  }
}
