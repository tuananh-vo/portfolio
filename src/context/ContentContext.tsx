import { createContext, useContext, useEffect, useState } from "react";
import { defaultContent } from "../data/defaultContent";

type Content = typeof defaultContent;
type ContentCtx = { content: Content; setContent: (c: Content) => void };

const Context = createContext<ContentCtx | null>(null);
export const useContent = () => {
	const ctx = useContext(Context);
	if (!ctx) throw new Error("ContentProvider missing");
	return ctx;
};

export const ContentProvider: React.FC<React.PropsWithChildren> = ({
	children
}) => {
	const [content, setContent] = useState<Content>(() => {
		const stored = localStorage.getItem("portfolio-content");
		return stored ? JSON.parse(stored) : defaultContent;
	});

	useEffect(() => {
		localStorage.setItem("portfolio-content", JSON.stringify(content));
	}, [content]);

	return (
		<Context.Provider value={{ content, setContent }}>
			{children}
		</Context.Provider>
	);
};
