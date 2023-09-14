import React from "react";
import NoteAppItemArchived from "./NoteAppItemArchived";

function ArchivedNotes({ notes, onDelete, onMove }) {
	const result = notes.filter((note) => note.archived === true);
	if (result == "") {
		return (
			<div className="archived-notes">
				<span className="archived-notes__empty">Arsip kosong</span>
			</div>
		);
	} else {
		return (
			<div className="archived-notes">
				<h2 className="archived-notes__title">Arsip</h2>
				<div className="archived-notes__content">
					{result.map((note) => (
						<NoteAppItemArchived
							key={note.id}
							id={note.id}
							title={note.title}
							created_at={note.created_at}
							onDelete={onDelete}
							onMove={onMove}
							{...note}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default ArchivedNotes;
