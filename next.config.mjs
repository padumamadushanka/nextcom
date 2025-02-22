/** @type {import('next').NextConfig} */
import config, { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME, NEXTAUTH_SECRET ,CAR_ID,BIKE_ID,VAN_ID,BUS_ID,WHEEL_ID,LORRY_ID,HEAVY_ID,RENT_ID,CARPARTS_ID,BIKEPARTS_ID,WHEELPARTS_ID,VANPARTS_ID} from './config.js'

const nextConfig = {
    images:{
            remotePatterns:[
                {
                    protocol:"https",
                    hostname:"res.cloudinary.com"
                }
            ]
    },
    env: {
      DB_URI: config.DB_URI,
      API: config.API,
      NEXTAUTH_SECRET: config.NEXTAUTH_SECRET,
      GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,
  CLOUDINARY_CLOUD_NAME:config.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY:config.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET:config.CLOUDINARY_API_SECRET,
  CAR_ID:config.CAR_ID,
    BIKE_ID:config.BIKE_ID,
    VAN_ID:config.VAN_ID,
    BUS_ID:config.BUS_ID,
    WHEEL_ID:config.WHEEL_ID,
    LORRY_ID:config.LORRY_ID,
    HEAVY_ID:config.HEAVY_ID,
    RENT_ID:config.RENT_ID,
    CARPARTS_ID:config.CARPARTS_ID,
    BIKEPARTS_ID:config.BIKEPARTS_ID,
    WHEELPARTS_ID:config.WHEELPARTS_ID,
    VANPARTS_ID:config.VANPARTS_ID
    },
  };
export default nextConfig;
