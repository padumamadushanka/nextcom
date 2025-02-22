/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
        },
      ],
    },
    env: {
      DB_URI: process.env.DB_URI,
      API: process.env.API,
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
      CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
      CAR_ID: process.env.CAR_ID,
      BIKE_ID: process.env.BIKE_ID,
      VAN_ID: process.env.VAN_ID,
      BUS_ID: process.env.BUS_ID,
      WHEEL_ID: process.env.WHEEL_ID,
      LORRY_ID: process.env.LORRY_ID,
      HEAVY_ID: process.env.HEAVY_ID,
      RENT_ID: process.env.RENT_ID,
      CARPARTS_ID: process.env.CARPARTS_ID,
      BIKEPARTS_ID: process.env.BIKEPARTS_ID,
      WHEELPARTS_ID: process.env.WHEELPARTS_ID,
      VANPARTS_ID: process.env.VANPARTS_ID,
    },
  };
  
  export default nextConfig;
  