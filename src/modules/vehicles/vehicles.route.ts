import { Router } from "express";
import auth from "../../middleware/auth.js";
import { vehiclesController } from "./vehicles.controller.js";
import { role } from "../../utils/role.js";

const router = Router();
router.post("/", auth(role.admin), vehiclesController.createVehicles);

router.get("/", vehiclesController.getAllVehicles);

router.get("/:id", vehiclesController.getSingelVehicles);

router.put("/:id", auth(role.admin), vehiclesController.updateVehicles); //

router.delete("/:id", auth(role.admin), vehiclesController.deleteVehicles); //

export const vehiclesRouter = router;