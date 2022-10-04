import { Button, Card, CardActions, CardContent, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementTic, setTic } from "./redux/counter/counterSlice";
import DoneIcon from '@mui/icons-material/Done';

const App = () => {
  const ticList = useSelector((state) => state.counter.ticList);
  return (
    <Container>
      <Typography variant="h2" component="h1">Counter language tic</Typography>
      <Container>
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
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">{value}</Typography>
        <Typography variant="body2">{times} point</Typography>
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
                    dispatch(setTic({index, value: setter}));
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
