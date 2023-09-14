import ActiveNotes from "./ActiveNotes";
import ArchivedNotes from "./ArchivedNotes";

export default function NotesManager({
	notes,
	searchValue,
	onDeleteHandler,
	onArsipHandler,
	onMoveHandler,
}) {
	return (
		<div className="notes-manager">
			
			<ActiveNotes
				notes={searchValue === "" ? notes : searchValue}
				onDelete={onDeleteHandler}
				onArsip={onArsipHandler}
			/>
			
			<ArchivedNotes
				notes={searchValue === "" ? notes : searchValue}
				onDelete={onDeleteHandler}
				onMove={onMoveHandler}
			/>
		</div>
	);
}
