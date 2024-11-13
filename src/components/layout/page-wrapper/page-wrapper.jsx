import React from "react";
import ThemeSwitcher from "../theme-switcher/theme-switcher";
import Header from "../../layout/header/header";
import { Main } from "./styles";
import MainPage from "../../pages/main-page/main-page";

// Обёртка для контента страниц
function PageWrapper() {
  return (
    <>
      <ThemeSwitcher />
      <Header />
      <Main>
        <MainPage />
      </Main>
    </>
  );
}

export default PageWrapper;
