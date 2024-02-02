import { Color } from "@mui/material";
import { Shape } from "../enums/Shape";
import { Colors } from "../enums/Colors";
 
export interface DrawingItem {
  id: number;
  color: Colors;
  shape: Shape;
}