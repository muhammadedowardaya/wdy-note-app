import React from "react";
import { getInitialData } from "../utils/index";
import NoteAppContainer from "./NoteAppContainer";
import NotesManager from "./NotesManager";
import NoteAppSearch from "./NoteAppSearch";

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
		const userConfirmed = window.confirm("Yakin ingin menghapus catatan?");

		if (userConfirmed) {
			let notes;
			if (this.state.searchValue !== "") {
				notes = this.state.searchValue.filter((note) => note.id !== id);
			}
			notes = this.state.notes.filter((note) => note.id !== id);
			this.setState({ notes: notes, searchValue: notes });

			document.getElementById("search").value = "";
            this.setState({searchValue:""})
            alert("berhasil menghapus note");
		}

	}

	onArsipHandler(id) {
		const note = this.state.notes.filter((note) => note.id === id);
		note[0].archived = true;
		const notes = this.state.notes;
		this.setState({ notes });
	}

	onMoveHandler(id) {
		const note = this.state.notes.filter((note) => note.id === id);
		note[0].archived = false;
		const notes = this.state.notes;
		this.setState({ notes });
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
            searchValue: ""
        })
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
