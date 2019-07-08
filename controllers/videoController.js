import { video } from "../db";
import routes from "../routes";
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", video });
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "search", searchingBy, video });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "upload" });
export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  //to do:upload and save video
  res.redirect(routes.videoDetail(12036));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "video detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "edit video" });

export const videos = (req, res) =>
  res.render("videos", { pageTitle: "videos" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "delete video" });
