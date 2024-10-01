import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./components/ui/button";
import metafixerLogo from "@/assets/meta_fixer_logo.png";
import { faCopyright } from "@fortawesome/pro-duotone-svg-icons";

function Privacy() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="/">
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
          </a>
          <nav>
            <Button variant="outline" className="mr-2">
              <a href="/#key-features">Features</a>
            </Button>
            <Button>
              <a href="/MetaFixer.zip" download="MetaFixer.zip">
                Download
              </a>
            </Button>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto py-6 sm:px-6 lg:px-8 flex-1">
        <div className="">
          <h1 className="text-3xl font-bold">Privacy Policy for MetaFixer</h1>
          <span className="text-gray-600 text-sm font-semibold">
            Effective Date: 30 September 2024
          </span>
          <p className="my-2">
            At MetaFixer, we are committed to protecting your privacy. This
            privacy policy outlines the types of information we do and do not
            collect when you use the MetaFixer app.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Data Collection</h2>
          <p className="my-2">
            MetaFixer does not collect, store, or share any personal
            information.
          </p>
          <p className="my-2">
            The app operates locally on your device and does not transmit any
            data to external servers. All data related to your photos and
            metadata remains on your device and is not accessible to us or any
            third parties.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Third-Party Services</h2>
          <p className="my-2">
            MetaFixer does not use any third-party analytics, advertising, or
            data collection services.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Your Consent</h2>
          <p className="my-2">
            By using MetaFixer, you consent to this privacy policy. As we do not
            collect any data, there is no need for opt-in or opt-out mechanisms.
          </p>
          <h2 className="text-2xl font-semibold mb-2">
            Changes to This Privacy Policy
          </h2>
          <p className="my-2">
            Since MetaFixer does not collect any data, it is unlikely that this
            privacy policy will change. However, we may update this policy to
            reflect changes in the app’s functionality or legal requirements.
            Any changes will be posted within the app.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="my-2">
            If you have any questions about this privacy policy, feel free to
            contact me at{" "}
            <a href="mailto:robert@kochie.io" className="underline font-medium">
              robert@kochie.io
            </a>
            .
          </p>
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

export default Privacy;
