import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { ContentProvider } from "./context/ContentContext";
import "./index.css";
import Admin from "./pages/Admin";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ContentProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="/admin" element={<Admin />} />
				</Routes>
			</BrowserRouter>
		</ContentProvider>
	</React.StrictMode>
);
