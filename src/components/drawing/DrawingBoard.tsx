import { useState, MouseEvent, Fragment } from "react";
import { Colors } from "../../enums/Colors";
import { DrawingItem } from "../../types/DrawingItem";
import { Shape } from "../../enums/Shape";
import DrawingItemForm from "./DrawingItemForm";
import { Button, Container, Paper, Typography } from "@mui/material";

const DrawingBoard = (props: { drawingItem: DrawingItem[] }) => {
  const [drawingItems, setDrawingItem] = useState(props.drawingItem);
  console.log(drawingItems);

  const handleItem = () => {
    const id = drawingItems.length + 1;
    const newItem: DrawingItem = {
      id: id,
      color: Colors.Blue,
      shape: Shape.Rectangle,
    };

    setDrawingItem((previewItem) => [...previewItem, newItem]);
    console.log(drawingItems);
  };

  const handleCircle = () => {
    let circle: HTMLCanvasElement | null = document.getElementById(
      "canvas"
    ) as HTMLCanvasElement;
    const ctx = circle !== null && circle.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.fillStyle = Colors.Blue;
      ctx.arc(95, 50, 40, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    }
  };

  return (
    <Fragment>
      <Container maxWidth="lg" style={{ margin: "20px" }}>
        <Paper>
          <canvas
            id="canvas"
            width="200"
            height="100"
            style={{ border: `1px solid ${Colors.Blue}`, marginTop: "20px" }}
          ></canvas>
          <button onClick={handleCircle} style={{ marginLeft: "35px" }}>
            Make Circle
          </button>
          {drawingItems.map((item) => (<Typography key={item.id} style={{margin: "20px"}}>{item.shape}</Typography>))}
          <DrawingItemForm onAddItem={handleItem}/>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default DrawingBoard;
