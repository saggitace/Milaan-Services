export const partytownConfig = {
  forward: [
    "dataLayer.push", // for Google Tag Manager or analytics
    "gtag",           // Google Analytics
    "fbq",            // Facebook Pixel
    // Add any global functions your 3rd party scripts call
  ],
  lib: '/~partytown/',
}
