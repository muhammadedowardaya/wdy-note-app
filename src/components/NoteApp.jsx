import React from "react";
import { getInitialData } from "../utils/index";
import NoteAppContainer from "./NoteAppContainer";
import NotesManager from "./NotesManager";
import NoteAppSearch from "./NoteAppSearch";

import Swal from "sweetalert2";

class NoteApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getInitialData(),
			searchValue: "",
			maxChar: 50,
			charUpdate: 50,
		};

		this.onCharLimitHandler = this.onCharLimitHandler.bind(this);
		this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onArsipHandler = this.onArsipHandler.bind(this);
		this.onMoveHandler = this.onMoveHandler.bind(this);
		this.onSearchHandler = this.onSearchHandler.bind(this);
	}

	onCharLimitHandler(charLength) {
		const jumlahKarakterDiketik = charLength;
		const jumlahKarakterMaksimal = this.state.maxChar;

		let charUpdate;
		if (jumlahKarakterMaksimal - jumlahKarakterDiketik >= 0) {
			charUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
		}

		this.setState({ charUpdate });
	}

	onDeleteHandler(id) {
		Swal.fire({
			title: "Yakin ingin menghapus catatan?",
			text: "Catatan tidak dapat dikembalikan lagi",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Ya, hapus!",
		}).then((result) => {
			if (result.isConfirmed) {
				let notes;
				if (this.state.searchValue !== "") {
					notes = this.state.searchValue.filter((note) => note.id !== id);
				}
				notes = this.state.notes.filter((note) => note.id !== id);
				this.setState({ notes: notes, searchValue: notes });

				document.getElementById("search").value = "";
				this.setState({ searchValue: "" });
				Swal.fire("Deleted!", "Catatan berhasil dihapus.", "success");
			}
		});
	}

	onArsipHandler(id) {
		const note = this.state.notes.filter((note) => note.id === id);
		note[0].archived = true;
		const notes = this.state.notes;
		this.setState({ notes });
		Swal.fire("Selesai!", "Catatan telah diarsipkan.", "success");
	}

	onMoveHandler(id) {
		const note = this.state.notes.filter((note) => note.id === id);
		note[0].archived = false;
		const notes = this.state.notes;
		this.setState({ notes });
		Swal.fire("Selesai!", "Catatan keluar dari arsip", "success");
	}

	onSearchHandler(search) {
		const filteredNotes = this.state.notes
			.map((note) => {
				if (note.title && note.title.toLowerCase().includes(search)) {
					return note;
				}
				return null;
			})
			.filter(Boolean);

		// Perbarui state 'notes' sesuai dengan hasil pencarian atau data asli
		this.setState({
			searchValue: filteredNotes,
		});
	}

	onAddNoteHandler({ title, body }) {
		this.setState((prevState) => {
			return {
				notes: [
					...prevState.notes,
					{
						id: +new Date(),
						title: title,
						body: body,
						archived: false,
						createdAt: new Date().toISOString(),
					},
				],
			};
		});
		this.setState({
			searchValue: "",
		});
		Swal.fire("Berhasil!", "Catatan berhasil ditambahkan.", "success");
	}

	render() {
		return (
			<div className="note-app">
				<NoteAppSearch onSearch={this.onSearchHandler} />
				<NoteAppContainer
					onChange={this.state.charUpdate}
					onAddNoteHandler={this.onAddNoteHandler}
					onCharLimitHandler={this.onCharLimitHandler}
					maxChar={this.state.maxChar}
				/>
				<NotesManager
					notes={this.state.notes}
					searchValue={this.state.searchValue}
					onDeleteHandler={this.onDeleteHandler}
					onArsipHandler={this.onArsipHandler}
					onMoveHandler={this.onMoveHandler}
				/>
			</div>
		);
	}
}

export default NoteApp;
