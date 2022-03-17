const express = require("express");

// PERSONAL PROFILE INFOS
route.get("/me", (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
