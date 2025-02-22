import { NextResponse } from 'next/server';

export async function DELETE(req) {
    const _req = await req.json();
    console.log(_req)
    const {  fileName } = _req;
    const storageZone = "riyalanka-img";
    const apiKey = "aaf48f98-5b4b-4706-a6cdeb30ee03-f590-4ff2";
  const url = `https://storage.bunnycdn.com/${storageZone}/${fileName}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "AccessKey": apiKey,
      },
    });

    if (response.ok) {
        return NextResponse.json({ message: "Image deleted successfully:" })

      //console.log("Image deleted successfully:", filePath);
    } else {
        return NextResponse.json({ message: "Failed to delete image:" })

     // console.error("Failed to delete image:", await response.text());
    }
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete image:" })

    //console.error("Error deleting image:", error);
  }
}

// Example usage
//deleteImage("uploads/test-image.jpg");
