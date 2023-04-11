import {
  LayoutGrid,
  User,
  Tags,
  Calendar
} from "lucide-react";
import { SidebarContainer, SidebarMenu } from "./styles";
import { LogoKanban } from "../logo/logo";

export function Sidebar() {
  return (
    <SidebarContainer>
      <header>
        <LogoKanban />
      </header>

      <SidebarMenu>
        <ul>
          <li title="dashboard">
            <LayoutGrid size={28} />
          </li>
          <li title="client">
            <User size={28} />
          </li>
          <li title="tasks" className="active">
            <Tags size={28} />
          </li>
          <li title="calendar">
            <Calendar size={28} />
          </li>
        </ul>
      </SidebarMenu>
    </SidebarContainer>
  );
}
