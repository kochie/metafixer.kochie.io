import metafixerLogo from "./assets/meta_fixer_logo.png";
import metafixerScreenshot from "./assets/meta_fixer_screenshot.png";
import Badge from "./assets/download_badge.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpBigSmall,
  faBoltLightning,
  faCalendar,
  faCopyright,
  faLayerGroup,
  faTableLayout,
} from "@fortawesome/pro-duotone-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import * as Fathom from "fathom-client";

const features = [
  { icon: faLayerGroup, text: "Batch processing of Facebook exported photos" },
  { icon: faCalendar, text: "Adds correct date and location metadata" },
  {
    icon: faArrowUpBigSmall,
    text: "Ensures photos appear in the right order in your photo apps",
  },
  { icon: faTableLayout, text: "User-friendly interface for easy navigation" },
  { icon: faBoltLightning, text: "Fast and efficient processing" },
  { icon: faApple, text: "Compatible with macOS" },
];

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
            <Button variant="outline" className="mr-2" onClick={() => Fathom.trackEvent("features")}>
              <a href="/#key-features">Features</a>
            </Button>
            <Button onClick={() => Fathom.trackEvent('mac store')}>
              <a href="https://apps.apple.com/us/app/metafixer/id6727004716">
                Download
              </a>
            </Button>
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
                MetaFixer is a powerful tool designed to add missing metadata to
                photos exported from Facebook, ensuring they appear in the
                correct date and location when imported into photo apps.
              </p>
              <div className="mt-6">
                <a href="https://apps.apple.com/us/app/metafixer/id6727004716" className="" onClick={() => Fathom.trackEvent("mac store")}>
                  <img src={Badge} />
                </a>
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
            <h3
              className="text-2xl font-bold text-gray-900 mb-4"
              id="key-features"
            >
              Key Features
            </h3>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="bg-white overflow-hidden shadow rounded-lg "
                >
                  <div className="px-4 py-5 sm:p-6 flex gap-4 items-center h-full">
                    <FontAwesomeIcon
                      icon={feature.icon}
                      fixedWidth
                      className="text-gray-900"
                      size="2x"
                    />
                    <div className="text-lg leading-6 font-medium text-gray-900">
                      {feature.text}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <p className="text-gray-500">
            <FontAwesomeIcon icon={faCopyright} /> 2024 MetaFixer. All rights
            reserved.
          </p>
          <a
            href="/privacy"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
