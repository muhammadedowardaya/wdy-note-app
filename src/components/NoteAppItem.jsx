import React from "react";
import NoteDeleteButton from "./NoteDeleteButton";
import NoteArsipButton from "./NoteArsipButton";
import { showFormattedDate } from "../utils/index";

function NoteAppItem({ body, title, createdAt, id, onDelete, onArsip }) {
	return (
		<div className="note-app__item">
			<h4 className="note-app__title">{title}</h4>
			<span className="note-app__item__created">
				{showFormattedDate(createdAt)}
			</span>
			<p className="note-app__item__body">{body}</p>
			<div className="note-app__item__action">
				<NoteDeleteButton id={id} onDelete={onDelete} />
				<NoteArsipButton id={id} onArsip={onArsip} />
			</div>
		</div>
	);
}

export default NoteAppItem;
