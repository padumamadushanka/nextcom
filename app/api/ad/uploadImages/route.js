import { NextResponse } from 'next/server';

// export async function POST(req) {
//   const { image } = await req.json();
//   try {
//     const result = await cloudinary.uploader.upload(image);
//     return NextResponse.json({
//       public_id: result.public_id,
//       secure_url: result.secure_url,
//     });
//   } catch (err) {
//     console.log(err);
// } }
// export async function PUT(req) {
//   const { public_id } = await req.json();
//   try {
//     const result = await cloudinary.uploader.destroy(public_id);
//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.log(err);
// } }

export  async function POST(req) {
    // if (req.method !== "POST") {
    //   return res.status(405).json({ message: "Method not allowed" });
    // }
   
    const _req = await req.json();
    console.log(_req)
    const { file, fileName } = _req; // Expecting base64 file data
  
    if (!file || !fileName) {
        return NextResponse.json({ message: "Missing file or filename" })
    //   return res.status(400).json({ message: "Missing file or filename" });
    }
  
    const storageZone = "riyalanka-img";
    const apiKey = "aaf48f98-5b4b-4706-a6cdeb30ee03-f590-4ff2";
  
    const uploadUrl = `https://storage.bunnycdn.com/${storageZone}/${fileName}`;
  
    try {
      const response = await fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/octet-stream",
          "AccessKey": apiKey,
        },
        body: Buffer.from(file, "base64"),
      });
      console.log(response)
  
      if (response.ok) {
        return NextResponse.json(
            {
                message: "Upload successful",
                url: `https://${storageZone}.b-cdn.net/${fileName}`,
                fileName:fileName
              }
        )

        // return res.status(200).json({
        //   message: "Upload successful",
        //   url: `https://${storageZone}.b-cdn.net/${fileName}`,
        // });
      } 
      else {
        return NextResponse.json(
            {
                message: "Upload failed"
              }
        )
        // return res.status(500).json({ message: "Upload failed" });
      }
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message:  error })
    //   return res.status(500).json({ message: "Error uploading image", error });
    }
  }
  