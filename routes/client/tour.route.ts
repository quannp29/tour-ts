import { Request, Response, Router } from "express";
const router: Router = Router();

import Tour from "../../models/tour.model";

router.get("/", async (req: Request, res: Response) => {
  // SELECT * FROM tours WHERE deleted = false AND status = "active";
  const tours = await Tour.findAll({
    where: {
      deleted: false,
      status: "active"
    },
    raw: true
  });

  res.render("client/pages/tours/index", {
    pageTitle: "Danh sách tour",
    tours: tours
  });
});

export const tourRoutes: Router = router;