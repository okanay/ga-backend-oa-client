import { ReactRouter } from "./router-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export const Providers = () => {
  return (
    <>
      <ThemeProvider>
        <ReactRouter />
      </ThemeProvider>
    </>
  );
};
