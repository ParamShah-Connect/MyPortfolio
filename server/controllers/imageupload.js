import imageModel from "../models/imageModel.js";

export const uploadImage = async (req, res) => {
  try {
    const { identifier, imageType, buffer } = req.body;
    if (!identifier || !imageType || !buffer) {
      return res.status(400).json({ error: 'Missing required fields' });
    }


    const newImage = new imageModel({
      data: Buffer.from(buffer),
      contentType: imageType,
      identifier: identifier,
    });

    await newImage.save();

    res.status(201).json({
      message: "Image uploaded successfully",
      id: newImage._id,
      identifier: identifier,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const fetchImage = async (req, res) => {
  try {
    const { identifier } = req.params;
    
    const image = await imageModel.findOne({ identifier });

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    res.set("Content-Type", image.contentType);
    res.send(image.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
