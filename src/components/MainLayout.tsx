import { Outlet } from "react-router-dom"

const MainLayout = () => (
  <div>
    <header className="flex flex-col gap-10 mb-5">
      <h1 className="text-3xl">
        Book a wellness session.
      </h1>
      <p>Visit one of our expert consultants to get yourself feeling 100% again.</p>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
)

export default MainLayout