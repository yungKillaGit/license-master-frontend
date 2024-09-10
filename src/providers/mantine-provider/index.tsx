'use client';
import { Global, MantineProvider as MantineProviderBase, MantineProviderProps } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { RefineThemes } from "@refinedev/mantine";

export const MantineProvider = ({children, ...rest}: MantineProviderProps) => {
  return <MantineProviderBase withGlobalStyles withNormalizeCSS theme={RefineThemes.Blue} {...rest}>
    <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
    <NotificationsProvider position="top-right">
      {children}
    </NotificationsProvider>    
  </MantineProviderBase>
}