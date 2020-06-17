// Type definitions for mailgo
// Project: mailgo
// Definitions by: Matteo Manzinello <https://matteomanzinello.com>

export type MailgoConfig = {
  initEvent?: string;
  defaultLang?: string;
  forceLang?: boolean;
  additionalCSS?: string;
  // TODO here mailgo configurations!
};

export default function mailgo(mailgoConfig?: MailgoConfig): void;