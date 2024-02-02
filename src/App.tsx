import { Fragment } from "react";
import { Container } from "@mui/material";
import TaskList from "./components/tasks/TaskList";
import { Colors } from "./enums/Colors";
import DrawingBoard from "./components/drawing/DrawingBoard";

function App() {

 type ColorsType = typeof Colors;
//  const red: ColorsType = Colors.Red;

 

  const tasks = [
    {
      id: 1,
      title: "title 1",
      completed: false,
    },
    {
      id: 2,
      title: "title 2",
      completed: false,
    },
    {
      id: 3,
      title: "title 3",
      completed: false,
    },
    {
      id: 4,
      title: "title 4",
      completed: true,
    },
  ];

  return (
    <Fragment>
      <Container>
        <TaskList tasks={tasks} />
      </Container>
      <DrawingBoard  drawingItem={[]}/>
    </Fragment>
  );
} 

export default App;
