import { ReactRouter } from "./router-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import { FramerProvider } from "@/providers/framer-provider";
import { JotaiProvider } from "@/providers/jotai-provider";
import { LenisProvider } from "@/providers/lenis-provider";

export const AppProviders = () => {
  return (
    <>
      <JotaiProvider>
        <ThemeProvider>
          <FramerProvider>
            <LenisProvider>
              <ReactRouter />
            </LenisProvider>
          </FramerProvider>
        </ThemeProvider>
      </JotaiProvider>
    </>
  );
};
