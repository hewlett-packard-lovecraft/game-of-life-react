import styled from "styled-components";

const SliderContainer = styled.div`
    margin: 0 0 .1rem 0;

    &::-webkit-scrollbar {
        width: 10px;
        border: 1px solid black;
    }

    &::-webkit-slider-runnable-track {
        background: tomato;
        height: 5px;
    }

    &::-moz-range-track {
        background: tomato;
        height: 5px;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 15px;
        width: 15px;
        background: pink;
        margin-top: -5px;
        border-radius: 50%;
    }

    &::-moz-range-thumb {
        height: 15px;
        width: 15px;
        background: pink;
        margin-top: -5px;
        border-radius: 50%;
    }
}
`

export default SliderContainer;