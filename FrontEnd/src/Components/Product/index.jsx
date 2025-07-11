import {
  ProductContainer,
  ImageContainer,
  BottomSection,
  AddIconContainer,
  RatingContainer,
} from "./styles";
import { Typography } from "../Typography";
import TestImage from "../../assets/Modelo especial-img.png";
import { FaPlus } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { COLOR_PALETTE } from "../../Palette";
export const Product = () => {
  return (
    <ProductContainer>
      <Typography variant="h3">Modelo Especial</Typography>
      <ImageContainer>
        <img src={TestImage} alt="Beer image"></img>
      </ImageContainer>
      <BottomSection>
        <Typography variant="span" colorVariant="primary">
          $12.50
        </Typography>
        <AddIcon></AddIcon>
      </BottomSection>
      <Rating></Rating>
    </ProductContainer>
  );
};
const AddIcon = () => {
  return (
    <AddIconContainer>
      <FaPlus color="white" size="20px"></FaPlus>
    </AddIconContainer>
  );
};

const Rating = () => {
  return (
    <RatingContainer>
      <IoMdStar color={COLOR_PALETTE.BUTTON_PRIMARY}></IoMdStar>
      <Typography variant="span" colorVariant="primary">
        4.9
      </Typography>
    </RatingContainer>
  );
};
