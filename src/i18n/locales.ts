// We need this export in here, otherwise lingui.config.ts crashes on macro imports
export const locales = ["en", "pl"] as const;

export type Lang = (typeof locales)[number];
