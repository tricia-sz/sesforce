import { DeashboardHeader } from "./components/header/header";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <DeashboardHeader />
      {children}
    </>
  )
}