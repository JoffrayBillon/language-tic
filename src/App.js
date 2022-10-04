import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, set } from "./redux/counter/counterSlice";

function App() {
  const [setter, setSetter] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Container>
      <Typography variant="h1">Counter language tic</Typography>
      <Typography variant="h2">{count} stick</Typography>
      <Button onClick={() => dispatch(increment())}>Add point</Button>
      <Container>
        <TextField
          type={"number"}
          value={setter}
          onChange={(event) => setSetter(event.target.value)}
        ></TextField>
        <Button
          onClick={() => {
            dispatch(set(setter));
            setSetter(0);
          }}
        >
          Set point
        </Button>
      </Container>
    </Container>
  );
}

export default App;
