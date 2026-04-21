export const baseUrl = process.env.APP_BASE_URL ?? 'http://localhost:3000';
export const redirectUrl = process.env.APP_REDIRECT_URL ?? `${baseUrl}/callback`;

export const appId = process.env.SSO_APP_ID ?? 'sampleId'; // Register the sample app in Logto dashboard
export const endpoint = process.env.SSO_ENDPOINT ?? 'http://localhost:3001'; // Replace with your own Logto endpoint
