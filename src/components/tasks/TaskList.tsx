import { Fragment, useEffect, useState } from "react";
import { Task } from "../../types/Task";
import { Container, List, ListItem, ListItemText, Paper } from "@mui/material";
import TaskForm from "./TaskForm";

const TaskList = (props: { tasks: Task[] }) => {
  const [taskList, setTaskList] = useState<Task[]>(props.tasks);

  const handleAddToTask = (task: Task) => {
    const updatedTask = { ...task, id: taskList.length + 1 };
    setTaskList((prevTaskList) => [...prevTaskList, updatedTask]);
  };

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  return (
    <Fragment>
      <Container>
        <Paper>
          <List>
            {taskList.map((task) => (
              <ListItem key={task.id}>
                <ListItemText primary={task.title} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
      <Container>
        <TaskForm onAddTask={handleAddToTask} />
      </Container>
    </Fragment>
  );
};

export default TaskList;
