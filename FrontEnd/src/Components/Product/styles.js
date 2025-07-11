import styled from "@emotion/styled";
import { COLOR_PALETTE } from "../../Palette";
export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  height: 240px;
  width: 170px;
  box-shadow: 1px 2px 9px -3px rgba(31, 30, 30, 0.75);
  position: relative;
`;
export const ImageContainer = styled.div`
  img {
    width: 122px;
    height: 130px;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-left: 40px;
  margin-top: 5px;
`;
export const AddIconContainer = styled.div`
  background: ${COLOR_PALETTE.BUTTON_PRIMARY};
  width: 45px;
  height: 40px;
  padding: 10px;
  border-radius: 15px;
`;
export const RatingContainer = styled.div`
  display: flex;
  position: absolute;
  top: 80%;
  left: 10%;
`;
