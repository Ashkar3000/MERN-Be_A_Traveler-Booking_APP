import Hotel from "../models/Hotel.js";

// Hotel CRUD Operations

export const createHotel = async (req, res) => {
    const newHotel = new Hotel(req.body);
    try {
      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel);
    } catch (error) {
      res.status(500).json(error);
    }
}

export const updateHotel = async (req, res) => {
    try {
      const updateHotel = await Hotel.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updateHotel);
    } catch (error) {
      res.status(500).json(error);
    }
}

export const deleteHotel =  async (req, res) => {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json("Hotel is deleted");
    } catch (error) {
      res.status(500).json(error);
    }
}

 export const getHotel = async (req, res) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
      res.send(hotel)
    } catch (error) {
      res.status(500).json(error);
    }
}

export const getAllHotels = async (req, res) => {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
      res.status(500).json(error);
    }
}