import { Smartphone } from "lucide-react";

export default function AppDownload() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Download <span className="text-red-600">Mobile Application</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg">
              Stay connected with us anytime, anywhere! Download our mobile app
              to manage your membership, track your workouts, and stay up to date
              with the latest offers and schedules.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg bg-gray-900 border border-gray-700 px-6 py-3 text-white hover:bg-gray-800 transition-colors"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg bg-gray-900 border border-gray-700 px-6 py-3 text-white hover:bg-gray-800 transition-colors"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.67c-.4-.2-.68-.6-.68-1.05V1.38c0-.45.28-.85.68-1.05l11.1 11.67L3.18 23.67zm1.44-23L16.1 10.83l-2.6 2.73L4.62.67zM21.54 10.5l-3.66-2.12-2.87 3.01 2.87 3.01 3.66-2.12c.58-.34.58-1.44 0-1.78zM4.62 23.33l8.88-9.16 2.6 2.73L4.62 23.33z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Placeholder phone mockup */}
          <div className="flex items-center justify-center">
            <div className="flex h-96 w-52 flex-col items-center justify-center rounded-3xl bg-gradient-to-b from-red-900 to-gray-900 border-4 border-gray-700">
              <Smartphone className="h-16 w-16 text-white/40 mb-4" />
              <span className="text-sm font-semibold text-white/70 text-center px-4">
                RedBone Gym App
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
