import mongoose from "mongoose";

const albumScheme = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  bgColour: { type: String, required: true },
  image: { type: String, required: true }
  
})

const albumModel = mongoose.model.album || mongoose.model("album", albumScheme);

export default albumModel;
