export const msalConfig = {
    auth: {
      clientId: "90538a27-c304-407e-8188-cadc86fdd031",
      authority:
        "https://login.microsoftonline.com/e4e34038-ea1f-4882-b6e8-ccd776459ca0", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
      redirectUri: "http://localhost:3000",
      clientType:"SPA"
    },
    cache: {
      cacheLocation: "localStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
    scopes: ['User.ReadBasic.All'],
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
    graphMeEndpoint: "Enter_the_Graph_Endpoint_Here/v1.0/me",
  };
  