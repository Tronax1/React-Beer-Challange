import { LayoutContainer } from "./styles";
import { NavBar } from "./Components";
export const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavBar />
      {children}
    </LayoutContainer>
  );
};
