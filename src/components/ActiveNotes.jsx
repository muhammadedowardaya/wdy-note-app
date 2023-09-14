import React from "react";
import NoteAppItem from "./NoteAppItem";

function ActiveNotes({ notes, onDelete, onArsip }) {
	const result = notes.filter((note) => note.archived === false);
	if (result == "") {
		return (
			<div className="active-notes">
				<div className="active-notes__content">
					<span className="active-notes__empty">Catatan kosong</span>
				</div>
			</div>
		);
	} else {
		return (
			<div className="active-notes">
				<h2 className="active-notes__title">Catatan</h2>
				<div className="active-notes__content">
					{result.map((note) => (
						<NoteAppItem
							key={note.id}
							id={note.id}
							title={note.title}
							createdAt={note.createdAt}
							onDelete={onDelete}
							onArsip={onArsip}
							{...note}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default ActiveNotes;
