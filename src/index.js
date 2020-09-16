import "./styles.css";
import Camera from "./camera";

const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
const camera = new Camera(context);
