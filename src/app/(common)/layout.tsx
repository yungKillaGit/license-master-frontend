'use client';
import { ThemedLayoutV2 } from "@refinedev/mantine";

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemedLayoutV2 Title={() => 'License Master'}>{children}</ThemedLayoutV2>
}