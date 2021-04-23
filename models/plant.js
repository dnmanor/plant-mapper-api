const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema(
  {
    scientificname: {
      type: String,
      trim: true,
      required: true,
    },
    commonname: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        const allowedCategory = [
          "foilage-tree",
          "flowering-tree",
          "conifer",
          "palm-like",
          "palm",
          "cacti",
          "annual",
          "foilage-shrub",
          "flowering-shrub",
          "house-plant",
        ];
        const isAllowed = allowedCategory.includes(value);
        if (!isAllowed) {
          throw new Error("Invalid Category");
        }
      }
    },
    family: {
        type: String,
        required: true,
        trim: true,
      },
    form: {
      type: String,
      trim: true,
      default: "",
    },
    height: {
      type: Number,
    },
    crownsize: {
      type: Number,
    },
    texture: {
      type: String,
      trim: true,
      validate(value) {
        const allowedTexture = [
          "fine",
          "coarse",
          "scaly",
          "smooth",
          "sand-paper",
        ];
        const isAllowed = allowedTexture.includes(value);
        if (!isAllowed) {
          throw new Error("Invalid Texture");
        }
      },
    },
    trunk: {
      type: String,
      trim: true,
    },
    foilage: {
      type: String,
      trim: true,
    },
    flowercolour: {
      type: String,
      trim: true,
    },
    scent: {
      type: String,
      trim: true,
    },
    bloomingperiod: {
      type: String,
      trim: true,
    },
    soil: {
      type: String,
      default: "",
      trim: true,
    },
    moisture: {
      type: String,
      default: "",
      trim: true,
    },
    light: {
      type: String,
      default: "",
      trim: true,
    },
    insects: {
      type: String,
      trim: true,
      default: "",
    },
    growthrate: {
      type: String,
      trim: true,
      default: "",
    },
    spacing: {
      type: Number,
      trim: true,
      default: 1,
    },
    description: {
      type: String,
      required: true,
      default: "",
    },
    photos: [
      {
        data: Buffer,
        contentType: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
