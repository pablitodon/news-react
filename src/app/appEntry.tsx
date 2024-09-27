import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore";
import { ThemeProvider } from "./providers/ThemeProvider";
import BaseLayout from "./layouts/BaseLayout";
import '@/shared/index.css';
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <RouterProvider router={appRouter} />
            </ThemeProvider>
        </Provider>
    </StrictMode>
)

