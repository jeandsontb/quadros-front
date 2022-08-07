import styled from "styled-components";

export default {
  Container: styled.section`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
    top: 0;
    left: 0;
  `,
  Content: styled.div`
    width: 500px;
    height: 500px;
    background-color: white;
  `,
};
