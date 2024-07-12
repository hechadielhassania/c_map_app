// sidebar.tsx
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './MainContent'

export default function SidebarContainer() {
  return (
    <div>
      <Sidebar />
      <div className="lg:pl-72">
        <Navbar />
        <MainContent />
      </div>
    </div>
  )
}
