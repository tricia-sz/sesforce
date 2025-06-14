import { DeashboardHeader } from "./components/header/header";
import { DeashboardSecondHeader } from "./components/header/headesecond";

export default function DashboardLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <DeashboardSecondHeader />
      {children}
    </>
  )
}