import UserPhoto from "../../../public/img/users/profile-01.png";
import { AvatarContainer } from "./styles";

export function Avatar() {
  return (
    <AvatarContainer>
      <img src={UserPhoto} alt="" />
    </AvatarContainer>
  );
}
