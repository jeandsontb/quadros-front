import styled from "styled-components";

const colorError = {
  success: {
    color: "#00BA88",
  },
  warn: { color: "#F4B740" },
  error: { color: "#ED2E7E" },
};

type typeError = {
  typeError: "success" | "warn" | "error";
};

export const Container = styled.div<typeError>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  z-index: 9999999999999999999;
  user-select: none;

  span {
    font-family: var(--primary-font);
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.9375rem;
    color: ${(props) => colorError[props.typeError].color};
    margin-bottom: 0.3125rem;
  }

  p {
    font-family: var(--primary-font);
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.8125rem;
    color: var(--gray-400);
  }

  .message {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const IconContainer = styled.div`
  margin: 0 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
