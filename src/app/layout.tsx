import '@styles/global.css';
import { authProvider } from '@providers/auth-provider';
import { dataProvider } from '@providers/data-provider';
import { DevtoolsProvider } from '@providers/devtools';
import { MantineProvider } from '@providers/mantine-provider';
import { Refine } from '@refinedev/core';
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar';
import routerProvider from '@refinedev/nextjs-router';
import { Metadata } from 'next';
import React, { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'License Master',
  description: 'Application for license administration',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MantineProvider>
      <html lang="en">
        <body>
          <Suspense>
            <RefineKbarProvider>
              <DevtoolsProvider>
                <Refine
                  routerProvider={routerProvider}
                  dataProvider={dataProvider}
                  authProvider={authProvider}
                  resources={[
                    {
                      name: 'blog_posts',
                      list: '/blog-posts',
                      create: '/blog-posts/create',
                      edit: '/blog-posts/edit/:id',
                      show: '/blog-posts/show/:id',
                      meta: {
                        canDelete: true,
                      },
                    },
                    {
                      name: 'categories',
                      list: '/categories',
                      create: '/categories/create',
                      edit: '/categories/edit/:id',
                      show: '/categories/show/:id',
                      meta: {
                        canDelete: true,
                      },
                    },
                  ]}
                  options={{
                    syncWithLocation: true,
                    warnWhenUnsavedChanges: true,
                    useNewQueryKeys: true,
                    projectId: 'FIJeLk-DS6Zwu-1hFWKg',
                  }}
                >
                  {children}
                  <RefineKbar />
                </Refine>
              </DevtoolsProvider>
            </RefineKbarProvider>
          </Suspense>
        </body>
      </html>
    </MantineProvider>
  );
}
