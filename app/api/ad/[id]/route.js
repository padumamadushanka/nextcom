import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import Product from "@/models/product";
export async function GET(req, context) {
  await dbConnect();
  console.log("here params  "+context.params.id)
  const id= await context.params.id;
  try {
    const product = await Product.findOne({ _id: id });
    return NextResponse.json(product);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        err: err.message,
},
      { status: 500 }
    );
} }


// import { NextResponse } from "next/server";
// import dbConnect from "@/utils/dbConnect";
// import Product from "@/models/product";
// export async function GET(req, context) {
//   await dbConnect();
//   console.log("slug is >> "+context.params.slug)
//   try {
//     const product = await Product.findOne({ slug: context.params.slug });
//     return NextResponse.json(product);
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json(
//       {
//         err: err.message,
// },
//       { status: 500 }
//     );
// } }



