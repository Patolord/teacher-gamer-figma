// Centralized Cal.com configuration
// All event types and shared settings are defined here

export const CAL_CONFIG = {
  // Cal.com username - embeds profile page where users choose an event
  username: "teachergamer",

  // Shared UI settings for all embeds
  ui: {
    hideEventTypeDetails: false,
    layout: "month_view" as const,
  },

  // Shared styles for calendar embeds
  styles: {
    width: "100%",
    height: "100%",
    overflow: "scroll",
  },
} as const;

// Helper to get cal link config object
export const getCalConfig = () => ({
  layout: CAL_CONFIG.ui.layout,
});

// Helper to get UI config for getCalApi
export const getCalUIConfig = () => ({
  hideEventTypeDetails: CAL_CONFIG.ui.hideEventTypeDetails,
  layout: CAL_CONFIG.ui.layout,
});
