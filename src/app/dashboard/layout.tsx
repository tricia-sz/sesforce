import { DeashboardHeader } from "./components/header";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <DeashboardHeader />
      {children}
    </>
  )
}