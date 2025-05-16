import { useState } from "react";
import { useContent } from "../context/ContentContext";
import { defaultContent } from "../data/defaultContent";

export default function Admin() {
	const { content, setContent } = useContent();
	const [json, setJson] = useState(JSON.stringify(content, null, 2));
	const [msg, setMsg] = useState("");

	const reset = () => {
		setJson(JSON.stringify(defaultContent, null, 2));
		setMsg("");
	};
	const save = () => {
		try {
			const parsed = JSON.parse(json);
			setContent(parsed);
			setMsg("✅ Saved!");
		} catch {
			setMsg("❌ Invalid JSON");
		}
	};

	return (
		<main className="pt-24 px-6 max-w-4xl mx-auto">
			<h1 className="mb-4 text-3xl font-bold">Admin — Edit Content JSON</h1>

			<textarea
				value={json}
				onChange={(e) => setJson(e.target.value)}
				className="h-96 w-full rounded-lg border p-4 font-mono text-sm"
			/>

			{msg && <p className="mt-2 text-sm">{msg}</p>}

			<div className="mt-4 flex gap-4">
				<button onClick={save} className="rounded bg-gray-200 px-4 py-2 ">
					Save
				</button>
				<button onClick={reset} className="rounded bg-gray-200 px-4 py-2">
					Reset Default
				</button>
			</div>
		</main>
	);
}
