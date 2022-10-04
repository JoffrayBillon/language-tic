import { Button, Card, CardActions, CardContent, CardHeader, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTic, incrementTic, removeTic, setTic } from "./redux/counter/counterSlice";
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

const App = () => {
  const ticList = useSelector((state) => state.counter.ticList);
  const [newTic, setNewTic] = useState("")
  const dispatch = useDispatch();

  return (
    <Container>
      <Container>
        <Typography variant="h2" component="h1" mb={2}>Counter language tic</Typography>
        <Box mb={2}>
          <TextField
            label="New language tic"
            size="small"
            value={newTic}
            onChange={(event) => setNewTic(event.target.value)}
            InputProps={{
              endAdornment: <InputAdornment position="end">
                <IconButton
                  size="small"
                  onClick={() => {
                    if (newTic) {
                      dispatch(addTic(newTic));
                      setNewTic("");
                    }
                  }}
                >
                  <DoneIcon />
                </IconButton>
              </InputAdornment>
            }}
          ></TextField>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
            },
          }}>
          {ticList.map((item, index) => <CardComp key={index} index={index} tic={item} />)}
        </Box>
      </Container>
    </Container>
  );
}

const CardComp = ({ index, tic: { times, value } }) => {
  const [setter, setSetter] = useState("");
  const dispatch = useDispatch();

  return (
    <Card>
      <CardHeader
        title={value}
        action={
          <IconButton
            onClick={() => dispatch(removeTic(index))}
          >
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body1">{times} point</Typography>
      </CardContent>
      <CardActions
        sx={{ gap: 1 }}>
        <Button onClick={() => dispatch(incrementTic(index))}>Add point</Button>
        <TextField
          size="small"
          type="number"
          sx={{ width: "120px" }}
          value={setter}
          onChange={(event) => setSetter(event.target.value)}
          InputProps={{
            endAdornment: <InputAdornment position="end">
              <IconButton
                size="small"
                onClick={() => {
                  if (setter) {
                    dispatch(setTic({ index, value: setter }));
                    setSetter("");
                  }
                }}
              >
                <DoneIcon />
              </IconButton>
            </InputAdornment>
          }}
        ></TextField>
      </CardActions>
    </Card>
  );
}

export default App;
