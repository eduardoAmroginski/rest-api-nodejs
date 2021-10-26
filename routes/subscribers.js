import express from "express";
const router = express.Router();

router.get("/", (request, response) => {
  response.send("REST API ok");
});

router.get("/:id", (request, response) => {
  response.send("REST API ID ok");
});

router.post("/", (request, response) => {});

router.patch("/:id", (request, response) => {});

router.put("/:id", (request, response) => {});

router.delete("/:id", (request, response) => {});

export default router;
