import styled, { css } from "styled-components/macro";
import { Color, FontWeight } from "../../../theme";
import { SynthThemeProps } from "../../synthesizer/synthesizer.types";

export const Container = styled.div` `;

export const Button = styled.button<SynthThemeProps>`
  width: 22rem;
  height: 5.5rem;
  background-image: linear-gradient(to right,#30BD8B 0%,  #8CEAD3 51%, #8CEAD3 60%, #30BD8B 100%);
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding-right: 1.8rem;
	padding-left: 2rem;
  justify-content: space-between;
  background-size: 250% auto;
  transition: 400ms;
  
  & :hover {
    background-position: right center;
  }

  svg {
    transform: scale(0.9);
    path {
      fill: ${Color.DARK_GRAY};
    }
  }
	
  ${({ theme }) => theme.isSynthVisible && css`
    transform: translateY(1vh);
  `}
`

export const Text = styled.span`
  color: ${Color.DARK_GRAY};;
  margin-right: .5rem;
  font-size: 1.7rem;
  font-weight: ${FontWeight.BOLD};
`;