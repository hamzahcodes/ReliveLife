import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: 'daibbk4fv',
  api_key: '927844468182253',
  api_secret: '8Yc7X0FGUeLgPCkXkaQ32dmMn-0',
  secure: true,
});
 
export { cloudinary };
// export const uploadImageToCloudinary = async (req, res) => {
//   cloudinary.uploader.upload(req.file.path, function (err, result){
//     if(err) {
//       console.log(err);
//       return res.status(500).json({
//         success: false,
//         message: "Error"
//       })
//     }

//     res.status(200).json({
//       success: true,
//       message:"Uploaded!",
//       data: result.secure_url
//     })
//   })
// };
