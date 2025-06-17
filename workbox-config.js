// eslint-disable-next-line no-undef
module.exports = {
  globDirectory: "dist",
  globPatterns: [
    // core code
    "**/*.{html,js,css}",
    // images
    "**/*.{png,webp,svg,ico}",
    "**/*.{json,woff,woff2,webmanifest}",
  ],
  maximumFileSizeToCacheInBytes: 6000000, // 5MB
  ignoreURLParametersMatching: [/^id$/, /^page$/, /^json$/, /^utm_/],
  dontCacheBustURLsMatching: /.*\.[a-f0-9]{8}\..*/,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "google-fonts",
      },
    },
    {
      urlPattern: /^https:\/\/fonts\.gstatic\.com/,
      handler: "CacheFirst",
      options: {
        cacheName: "google-fonts",
        cacheableResponse: {
          statuses: [0, 200],
        },
        expiration: {
          maxAgeSeconds: 60 * 60 * 24 * 365,
          maxEntries: 30,
        },
      },
    },
  ],
  swDest: "dist/service-worker.js",
  clientsClaim: false,
  skipWaiting: false,
  offlineGoogleAnalytics: true,
};
