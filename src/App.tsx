import metafixerLogo from './assets/meta_fixer_logo.png'
import metafixerScreenshot from './assets/meta_fixer_screenshot.png'
import './App.css'
import { Button } from '@headlessui/react'

function App() {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={metafixerLogo}
                alt="MetaFixer Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <h1 className="text-2xl font-bold text-gray-900">MetaFixer</h1>
            </div>
            <nav>
              <Button className="mr-2">Features</Button>
              <Button className="mr-2">Pricing</Button>
              <Button>Download</Button>
            </nav>
          </div>
        </header>
  
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Fix your photo metadata with ease
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  MetaFixer is a powerful tool designed to add missing metadata to photos exported from Facebook, ensuring they appear in the correct date and location when imported into photo apps.
                </p>
                <div className="mt-6">
                  <Button>Get Started</Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src={metafixerScreenshot}
                  alt="MetaFixer Screenshot"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
  
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Batch processing of Facebook exported photos",
                  "Adds correct date and location metadata",
                  "Ensures photos appear in the right order in your photo apps",
                  "User-friendly interface for easy navigation",
                  "Fast and efficient processing",
                  "Compatible with macOS"
                ].map((feature, index) => (
                  <li key={index} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="text-lg leading-6 font-medium text-gray-900">{feature}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
  
        <footer className="bg-white mt-12">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <p className="text-gray-500">© 2024 MetaFixer. All rights reserved.</p>
            <a href="/privacy" className="text-gray-500 hover:text-gray-700 transition-colors">
              Privacy Policy
            </a>
          </div>
        </footer>
      </div>
  )
}

export default App
