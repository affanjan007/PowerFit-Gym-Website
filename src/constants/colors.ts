export const colors = {
  // Primary colors
  primary: {
    DEFAULT: '#2C1B47', // Deep midnight purple
    light: '#3D2861',
    dark: '#1A0F2E',
  },
  
  // Accent colors
  accent: {
    DEFAULT: '#B83D6F', // Rich burgundy-pink
    light: '#D44B84',
    dark: '#8C2E54',
  },
  
  // Complementary colors
  complementary: {
    blue: '#1F4373', // Deep navy blue
    teal: '#206676', // Dark teal
    purple: '#4A2B6B', // Royal purple
  }
} as const;

// Semantic color mapping
export const semantic = {
  background: colors.primary.DEFAULT,
  text: {
    primary: '#FFFFFF',
    secondary: '#E5E5E5',
    muted: '#A0A0A0',
  },
  button: {
    primary: colors.accent.DEFAULT,
    hover: colors.accent.light,
    disabled: colors.accent.dark,
  },
  border: colors.primary.light,
} as const;