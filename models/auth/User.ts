// import { IMongoBase } from "@/utils/mongo/mongoose";
// import { Schema, model, models } from "mongoose";
// import mongoose from "mongoose";

// const userSchema = new Schema(
//   {
//     //id: String,
//     email: {
//       type: String,
//       unique: [true, "Email already exists"],
//       required: [true, "Email is required"],
//     },
//     email_virified: Boolean,
//     username: {
//       type: String,
//       required: [true, "Username is required"],
//     },
//     image: {
//       type: String,
//     },
//     provider: String,
//     provider_id: String,
//     bookmarks: [
//       {
//         type: Schema.Types.ObjectId,
//         ref: "Property",
//       },
//     ],
//   },
//   { timestamps: true }
// );


// const User = models?.User || model("User", userSchema);




// export { User , userSchema  };
// export type { IUser };
// //export default User;