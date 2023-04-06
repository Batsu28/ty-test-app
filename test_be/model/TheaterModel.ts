import mongoose from "mongoose";

const theaterSchema = new mongoose.Schema(
  {
    theaterId: Number,
    location: {
      address: {
        street1: String,
        city: String,
        state: String,
        zipcode: String,
      },
      geo: {
        type: {
          type: String,
          default: "Point",
        },
        coordinates: [Number],
      },
    },
  },
  { collection: "theaters" }
);

const Theaters = mongoose.model("Theaters", theaterSchema);

Theaters.collection.createIndex({ geo: "2dsphere" });

export default Theaters;
