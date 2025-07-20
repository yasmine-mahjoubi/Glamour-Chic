import Tour from "../models/Tour.mjs";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({ success: true, message: "Successfuly created", data: savedTour });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to create, try again" });
  }
};

//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({ success: true, message: "Successfuly updated", data: updatedTour });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to update, try again" });
  }
};

//delete tour
export const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Tour.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to delete, try again" });
  }
};

//getSingle tour (affichage)
export const getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Tour.findById(id);
    if (!tour) {
      return res.status(404).json({ success: false, message: "Tour not found" });
    }
    res.status(200).json({ success: true, data: tour });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve tour", error: err.message });
  }
};

//getAll tour
export const getAllTour = async (req, res) => {
  //for pagination
  const page = parseInt(req.query.page);
  try {
    const tours = await Tour.find({})
      .skip(page * 8)
      .limit(8);
    res
      .status(200)
      .json({ success: true, count: tours.length, message: "Successful", data: tours });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve tours", error: err.message });
  }
};

//get tour by search
export const getTourBySearch = async (req, res) => {
  //here 'i' means case sensitive
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    //gte means greater than equal
    const tours = await Tour.find({
      city,
      distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    });

    if (tours.length == 0) {
      res.status(200).json({ message: "Not found" });
    } else {
      res.status(200).json({ success: true, message: "Successful", data: tours });
    }
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

//get featured tour (featured=true)
export const getFeaturedTour = async (req, res) => {
  try {
    const tours = await Tour.find({ featured: true }).limit(8);
    res.status(200).json({ success: true, message: "Successful", data: tours });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};

//get tour counts
export const getTourCount = async (req, res) => {
  try {
    const tourCount = await Tour.estimatedDocumentCount();

    res.status(200).json({ success: true, data: tourCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};
export default {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
};
