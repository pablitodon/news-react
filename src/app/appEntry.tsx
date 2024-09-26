import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore";
import { ThemeProvider } from "./providers/ThemeProvider";
import BaseLayout from "./layouts/BaseLayout";
import '@/shared/index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <BaseLayout />
            </ThemeProvider>
        </Provider>
    </StrictMode>
)

