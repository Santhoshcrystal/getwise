export const express = {
  port: process.env.EXPRESS_PORT || 3000,
};

export const db = {
  url: "mongodb://localhost:27017/mai-db",
  user: "",
  password: "",
};
