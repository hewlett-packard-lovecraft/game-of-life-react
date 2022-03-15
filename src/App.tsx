import { useState, useRef } from 'react';
import './App.css';
import Col from './components/Col'
import Row from './components/Row'
import H1 from './components/H1'
import P from './components/P'
import Button from './components/Button'
import GridComponent from './components/GridComponent'
import GridContainer from './components/GridContainer'
import Title from './components/Title'
import LivingCell from './types/LivingCell';
import { DEFAULT_COLS, DEFAULT_INTERVAL, DEFAULT_ROWS, nextGeneration, randomGrid } from './game-of-life';

const App = () => {
  let [cols, setCols] = useState(DEFAULT_COLS);
  let [rows, setRows] = useState(DEFAULT_ROWS);
  let [world, setWorld] = useState(randomGrid(rows, cols));
  let [ticks, setTicks] = useState(0);
  let [running, setRunning] = useState(false);

  let runningRef = useRef(running); 
  runningRef.current = running;

  let ticksRef = useRef(ticks);
  ticksRef.current = ticks;

  const nextTick = useCallback(
    () => {
      if (!runningRef.current) {
        return;
      }

      setInterval
    },
    [a, b],
  ); // runs when value of input changes
  // refs do not notify on update on own

  return (
    <div className="App">
      <Col>

        <Title>
          <H1>
            Game of Life
          </H1>
          <P>
            A cellular automaton devised by the British mathematician John Horton Conway
          </P>
        </Title>

        <Row>
          <GridContainer>
            <GridComponent
              cols={cols}
              rows={rows}
              world={world}
            />
          </GridContainer>
        </Row>
        
        <Row>
          <Button
            onClick={() => setRunning(!running)}
          > { running ? "Pause" : "Play" || "Play"  } </Button>

          <Button
            onClick={() => world = nextGeneration(world)}
          > Next </Button>

        </Row>
      </Col>
    </div>
  );
}

export default App;
