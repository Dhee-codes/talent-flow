import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { SettingsLayout } from './components/security/SettingsLayout'
import { SecurityMain } from './components/security/SecurityMain'

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F9FAFB]">
      <Navbar />
      <SettingsLayout>
        <SecurityMain />
      </SettingsLayout>
      <Footer />
    </div>
  )
}

export default App
