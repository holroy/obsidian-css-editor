import {
	defaultKeymap,
	history,
	historyKeymap,
	indentWithTab,
} from "@codemirror/commands";
import { css } from "@codemirror/lang-css";
import {
	bracketMatching,
	foldGutter,
	foldKeymap,
	indentOnInput,
} from "@codemirror/language";
import { EditorState, Extension } from "@codemirror/state";
import { dropCursor, EditorView, keymap } from "@codemirror/view";
import {
	autocompletion,
	closeBrackets,
	closeBracketsKeymap,
	completionKeymap,
} from "@codemirror/autocomplete";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { lintKeymap } from "@codemirror/lint";
import { vim } from "@replit/codemirror-vim";
import { obsidian } from "./obsidian-theme";

export const basicExtensions: Extension[] = [
	vim(),
	history(),
	css(),
	foldGutter(),
	dropCursor(),
	EditorState.allowMultipleSelections.of(true),
	indentOnInput(),
	EditorView.lineWrapping,
	bracketMatching(),
	closeBrackets(),
	// autocompletion(),
	highlightSelectionMatches(),
	obsidian,
	keymap.of([
		...closeBracketsKeymap,
		...defaultKeymap,
		...searchKeymap,
		...historyKeymap,
		indentWithTab,
		...foldKeymap,
		...completionKeymap,
		...lintKeymap,
	]),
].filter((ext) => ext);
