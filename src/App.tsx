import { useState } from 'react';
import { DEFAULT_INTERVAL, nextGeneration, randomGrid } from './game-of-life';
import LivingCell from './types/LivingCell';

import { Col, Title, H1, P, Row, SliderContainer, Button, GridContainer } from './styled-components';
import { GridComponent } from './components';


const App = () => {
  let [cols, setCols] = useState(75);
  let [rows, setRows] = useState(75);
  let [world, setWorld] = useState(randomGrid(rows, cols));
  let [counter, setCounter] = useState(0);
  let [running, setRunning] = useState(false);
  let interval: ReturnType<typeof setInterval>;

  const onNext = () => {
    setWorld(nextGeneration(world))
    setCounter(counter + 1)
  }

  const togglePlay = () => {
    if (running) {
      clearInterval(interval);
    }

    if (!running) {
      interval = setInterval(onNext, DEFAULT_INTERVAL);
    }

    setRunning(!running)
  }

  const onClear = () => {
    setWorld(new Set<LivingCell>())
  }

  return (
    <div className="App">
      <Col>
        <Title>
          <H1>
            Game of Life
          </H1>
          <P>
            Cellular automaton game devised by the British mathematician John Horton Conway
          </P>
          <P>
          </P>
          <Row>
            Size:
            <SliderContainer>
              <input 
                name="gridSizeSlider" 
                type="range" 
                min={75} 
                max={175}
                value={cols}
                onChange={
                  (event) => {
                    let value: number = Math.min(+event.target.value, 175);
                    setCols(value)
                    setRows(value)
                  }
                } 
              />
            </SliderContainer>
            { cols }
          </Row>
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
            onClick={togglePlay}
          > { running ? "Pause" : "Play" } </Button>

          <Button
            onClick={onNext}
          > Next </Button>

          <Button
            onClick={onClear}
          >
            Clear
          </Button>
        </Row>
      </Col>
    </div>
  );
}

export default App;
