import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Tasks } from "./pages/Tasks";
import { Sidebar } from "./components/sidebar";
import { Header } from "./components/header";
import { ContentContainer, MainContainer } from "./AppStyles";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <MainContainer>
        <Sidebar />

        <ContentContainer>
          <Header />

          <Tasks />
        </ContentContainer>
      </MainContainer>

      <GlobalStyles />
    </ThemeProvider>
  );
}
