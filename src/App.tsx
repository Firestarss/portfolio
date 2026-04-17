
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Index />}>
              <Route index element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<ProjectDetail />} />
              <Route path="contact" element={<Contact />} />
              <Route path="resume" element={<Resume />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
