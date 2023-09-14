import React from "react";
import NoteDeleteButton from "./NoteDeleteButton";
import NoteMoveButton from "./NoteMoveButton";
import { showFormattedDate } from "../utils/index";

function NoteAppItemArchived({ body, title, createdAt, id, onDelete, onMove }) {
	return (
		<div className="note-app__item">
			<h3 className="note-app__title">{title}</h3>
			<span className="note-app__item__created">
				{showFormattedDate(createdAt)}
			</span>
			<p className="note-app__item__body">{body}</p>
			<div className="note-app__item__action">
				<NoteDeleteButton id={id} onDelete={onDelete} />
				<NoteMoveButton id={id} onMove={onMove} />
			</div>
		</div>
	);
}

export default NoteAppItemArchived;
