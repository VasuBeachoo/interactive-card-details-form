import { css } from "styled-components";

export const mixinCard = css`
  width: 27.938rem;
  height: 15.313rem;
  user-select: none;
  border-radius: 1rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const mixinCardText = css`
  width: fit-content;
  color: var(--White);
  opacity: 0.9;
  margin: 0;
`;

export const mixinInput = css`
  font-size: 0.95rem;
  border: 0.1rem solid var(--Light-grayish-violet);
  ${(props) =>
    props.showErrors &&
    css`
      border-color: ${(props) =>
        props.errorMsg === "" ? "var(--Light-grayish-violet)" : "var(--Red)"};
    `};
  border-radius: 0.5rem;
  outline: none;
  padding: 0.6rem 1rem;
  transition: 0.2s;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    border-color: var(--Very-dark-violet);
  }
`;

export const mixinBtn = css`
  text-align: center;
  width: 100%;
  user-select: none;
  background-color: var(--Very-dark-violet);
  color: var(--White);
  font-size: 1rem;
  border: 0.2rem solid var(--Very-dark-violet);
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    background-color: var(--White);
    color: var(--Very-dark-violet);
  }
`;
