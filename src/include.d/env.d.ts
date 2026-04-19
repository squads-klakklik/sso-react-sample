declare namespace NodeJS {
  interface ProcessEnv {
    readonly APP_BASE_URL?: string;
    readonly APP_REDIRECT_URL?: string;
    readonly LOGTO_APP_ID?: string;
    readonly LOGTO_ENDPOINT?: string;
  }
}

declare const process: {
  readonly env: NodeJS.ProcessEnv;
};
