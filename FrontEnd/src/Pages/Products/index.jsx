import { ProductsContainer, ListingsContainer } from "./styles";
import { Typography, Product } from "../../Components";
export const Products = () => {
  return (
    <ProductsContainer>
      <Typography variant="span" colorVariant="secondary">
        Hi Mr.Michael
      </Typography>
      <Typography variant="h1" colorVariant="secondary">
        Welcome Back!
      </Typography>
      <Typography variant="h2" colorVariant="secondary">
        Our Products
      </Typography>
      <ListingsContainer>
        <Product></Product>
      </ListingsContainer>
    </ProductsContainer>
  );
};
