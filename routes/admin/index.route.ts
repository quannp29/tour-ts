import { Express } from "express";
import { categoryRoutes } from "./category.route";
import { systemConfig } from "../../config/system";
import { tourRoutes } from "./tour.route";
import { uploadRoutes } from "./upload.route";

const adminRoutes = (app: Express): void => {

  const path = `/${systemConfig.prefixAdmin}`;

  app.use(`${path}/categories`, categoryRoutes);

  app.use(`${path}/tours`, tourRoutes);
  
  app.use(`${path}/upload`, uploadRoutes);

};

export default adminRoutes;