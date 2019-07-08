import { video } from "../db";
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", video });
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "search", searchingBy, video });
};
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "video detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "edit video" });

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "videos" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "delete video" });
