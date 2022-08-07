import styled from "styled-components";

export default {
  Container: styled.section`
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
  `,
  Content: styled.div`
    display: flex;
    width: 90%;
    margin-left: 10%;
    height: 100vh;
    justify-content: flex-end;
    align-items: flex-end;
    padding-bottom: 80px;
  `,
  BoxBackgroundImage: styled.div`
    position: relative;
    z-index: 1;
    width: 100%;
    height: 310px;
  `,
  BackgroundImage: styled.img`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
  `,
  ImageUnder: styled.img`
    position: absolute;
    z-index: 2;
    width: 146px;
    height: 140px;
    bottom: 16%;
    left: 8%;
  `,
  BoxContentActions: styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100px;
    height: 100px;
    background: var(--white);
    box-shadow: 0px 2px 10px rgba(76, 78, 100, 0.22);
    border-radius: 10px;
    padding: 28px;
  `,
};
