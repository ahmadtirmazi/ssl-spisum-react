import styled, { CreateStyled } from "@emotion/styled";

export interface Theme {
  fontFamily: string;
}

export const theme: Theme = {
  fontFamily: "Muli,Roboto,'Helvetica Neue',sans-serif"
};

export default styled as CreateStyled<Theme>;
