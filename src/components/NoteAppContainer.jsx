import NoteAppBody from "./NoteAppBody";
import NoteAppHeader from "./NoteAppHeader";

export default function NoteAppContainer({
	onChange,
	onAddNoteHandler,
	onCharLimitHandler,
	maxChar,
}) {
	return (
		<div className="note-app__container">
			<NoteAppHeader charLimit={onChange} />
			<NoteAppBody
				addNote={onAddNoteHandler}
				limit={onCharLimitHandler}
				maxChar={maxChar}
			/>
		</div>
	);
}
