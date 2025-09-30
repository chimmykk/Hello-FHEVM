import React from 'react';
import { CustomLayout } from "./layout/index"
import { Analytics } from "@vercel/analytics/react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CustomLayout>
      {children}
      <Analytics />
    </CustomLayout>
  )
}