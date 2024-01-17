// @refresh reload
import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start";
import { ErrorBoundary, Suspense } from "solid-js";
import "./app.css";
import { ErrorComponent } from "./components/Error";

export default function App() {
  return (
    <Router
      root={(props) => (
        <ErrorBoundary fallback={(err) => <ErrorComponent code={err} />}>
          <MetaProvider>
            <Title>SolidStart - Basic</Title>
            <nav>
              <a href="/">Index</a>
              <a href="https://atila.io">Atila.io</a>
            </nav>
            <Suspense fallback="navigating...">{props.children}</Suspense>
          </MetaProvider>
        </ErrorBoundary>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
