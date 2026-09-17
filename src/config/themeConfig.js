export const themeConfig = {
  classic: {
    primaryColor: '#8c2f39',
    secondaryColor: '#c9a96e',
    background: '#f7f0e6',
    cardBackground: '#ffffff',
    textColor: '#30251f',
    mutedText: '#77665d',
    borderColor: '#d8c7a3',
    accentColor: '#fffaf5',
    borderRadius: '12px',
    spacing: '18px',
    font: 'Cormorant Garamond, Georgia, serif'
  },
  tech: {
    primaryColor: '#22d3ee',
    secondaryColor: '#818cf8',
    background: '#0b1120',
    cardBackground: '#111827',
    textColor: '#e5e7eb',
    mutedText: '#94a3b8',
    borderColor: '#263449',
    accentColor: '#172554',
    borderRadius: '12px',
    spacing: '16px',
    font: 'DM Mono, monospace'
  }
};

export const getThemeVars = (templateName) => {
  const theme = themeConfig[templateName] || themeConfig.classic;

  return {
    '--primary-color': theme.primaryColor,
    '--secondary-color': theme.secondaryColor,
    '--background-color': theme.background,
    '--card-background': theme.cardBackground,
    '--text-color': theme.textColor,
    '--muted-text': theme.mutedText,
    '--border-color': theme.borderColor,
    '--accent-color': theme.accentColor,
    '--shadow-color': 'rgba(15, 23, 42, 0.08)',
    '--border-radius': theme.borderRadius,
    '--spacing': theme.spacing,
    '--font-family': theme.font
  };
};
