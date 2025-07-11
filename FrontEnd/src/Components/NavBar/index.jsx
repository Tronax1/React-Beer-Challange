import { NavBarContainer, IconContainer, UserProfileContainer } from "./styles";
import { RiMenu2Fill } from "react-icons/ri";
import UserImage from "../../assets/user.jpg";
export const NavBar = () => {
  return (
    <NavBarContainer>
      <IconContainer>
        <RiMenu2Fill size={30}></RiMenu2Fill>
      </IconContainer>
      <UserProfile></UserProfile>
    </NavBarContainer>
  );
};

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <img src={UserImage} alt="User profile image"></img>
    </UserProfileContainer>
  );
};
