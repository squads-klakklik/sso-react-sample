declare namespace NodeJS {
  interface ProcessEnv {
    readonly APP_BASE_URL?: string;
    readonly APP_REDIRECT_URL?: string;
    readonly SSO_APP_ID?: string;
    readonly SSO_ENDPOINT?: string;
  }
}

declare const process: {
  readonly env: NodeJS.ProcessEnv;
};
