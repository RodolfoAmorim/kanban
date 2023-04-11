import { Bell, MessageSquare, Plus } from "lucide-react";
import { Search } from "lucide-react";
import { HeaderContainer, SearchContainer, UserContainer } from "./styles";
import { Badge } from "../badge";
import { Button } from "../button";
import { Avatar } from "../avatar";

export function Header() {
  return (
    <HeaderContainer>
      <SearchContainer>
        <Search size={24} />
        <input type="text" placeholder="Search or tap a command" />
        <Badge>CTRL + F</Badge>
      </SearchContainer>

      <UserContainer>
        <Button>
          <Plus size={24} />
          Create
        </Button>

        <span>
          <MessageSquare size={24} />
        </span>

        <span>
          <Bell size={24} />
        </span>

        <Avatar />
      </UserContainer>
    </HeaderContainer>
  );
}
