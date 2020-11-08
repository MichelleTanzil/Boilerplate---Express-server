const express = require("express");
const router = express.Router();
const Item = require("../models/item");

router.get("/", (req, res) => {
  Coupon.find()
    .then((coupons) => {
      res.status(200).json({ coupons: coupons });
    })
    .catch((err) => res.json(err));
});

router.get("/:id", (req, res) => {
  Coupon.findOne({ _id: req.params.id })
    .then((coupon) => {
      res.status(200).json({ coupon: coupon });
    })
    .catch((err) => res.json(err));
});

module.exports = router;
