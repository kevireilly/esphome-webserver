import { css } from "lit";

export default css`
  button,
  .btn {
    cursor: pointer;
    border-radius: 4px;
    color: rgb(3, 169, 244);
    border: none;
    background-color: unset;
    padding: 8px;
    font-weight: 500;
    font-size: 12.25px;
    letter-spacing: 1.09375px;
    text-transform: uppercase;
  }

  button:active,
  .btn:active {
    background-image: rgba(127, 127, 127, 0.2);
    transition-duration: 1s;
  }

  button:hover,
  .btn:hover {
    background-color: rgba(127, 127, 127, 0.2);
    transition-duration: 1s;
  }
`;
