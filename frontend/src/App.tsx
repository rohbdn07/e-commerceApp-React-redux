import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AppRoutes from "./Routes";

// Create a client
const queryClient = new QueryClient();

function App(): JSX.Element {
   return (
      <QueryClientProvider client={queryClient}>
         <BrowserRouter>
            <AppRoutes />
         </BrowserRouter>
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   );
}

export default App;
