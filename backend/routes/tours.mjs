import express from "express";
import {
  createTour,
  deleteTour,
  updateTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTour,
  getTourCount,
} from "../controllers/tourController.mjs";

const router = express.Router();

//create new tour
router.post("/", createTour);

//delete tour
router.delete("/:id", deleteTour);

//update tour
router.put("/:id", updateTour);

//get Single tour
router.get("/:id", getSingleTour);

//get All tour
router.get("/", getAllTour);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);
export default router;
