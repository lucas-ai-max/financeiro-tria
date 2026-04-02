import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import UploadPage from "./pages/UploadPage";
import NotasFiscais from "./pages/NotasFiscais";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

const queryClient = new QueryClient();

const ProtectedApp = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/notas-fiscais" element={<NotasFiscais />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <ProtectedApp />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
