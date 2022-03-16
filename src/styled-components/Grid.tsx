import styled from "styled-components"

interface GridProps {
    rows: number;
    cols: number;
    size: string;
}

const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(${(props: GridProps) => props.rows || 25}, ${(props: GridProps) => props.size || '4px'});
    grid-template-columns: repeat(${(props: GridProps) => props.cols || 25}, ${props => props.size || '4px'});
    background-color: #eee;
    margin: 1rem 0;
    margin: 0 auto;
`
export default Grid;