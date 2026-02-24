import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import CriminalPage from "./pages/services/CriminalPage";
import WorkPage from "./pages/services/WorkPage";
import CivilPage from "./pages/services/CivilPage";
import FamilyPage from "./pages/services/FamilyPage";
import CorporatePage from "./pages/services/CorporatePage";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Team from "./pages/Team";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/direito-criminal"} component={CriminalPage} />
      <Route path={"/direito-trabalhista"} component={WorkPage} />
      <Route path={"/direito-civel"} component={CivilPage} />
      <Route path={"/direito-de-familia"} component={FamilyPage} />
      <Route path={"/direito-empresarial"} component={CorporatePage} />
      <Route path={"/depoimentos"} component={Testimonials} />
      <Route path={"/contato"} component={Contact} />
      <Route path={"/nossa-equipe"} component={Team} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
