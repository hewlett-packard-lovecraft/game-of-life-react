import styled from "styled-components"

interface PropsCell {
    living: boolean;
}

const Cell = styled.div`
    color: $${(props: PropsCell) => props.living ? "black" : "white" || "white"}
    background: ${(props: PropsCell) => props.living ? "white" : "black" || "black"};
    border: 1px solid black;
` // living cells are black, dead cells are white

export default Cell;