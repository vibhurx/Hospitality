import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./shared/components/ScrollToTop";
import ContextProvider from "./shared/contexts/ContextProvider";
import { CustomRoutes } from "./utils/routes";
import { msalConfig } from "./authentication/sso/msalConfig";

function App() {
  const queryClient = new QueryClient();
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <MsalProvider instance={msalInstance}>
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <BrowserRouter>
            <ScrollToTop />
            <CustomRoutes />
          </BrowserRouter>
        </ContextProvider>
      </QueryClientProvider>
    </MsalProvider>
  );
}

export default App;
