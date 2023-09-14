import React from "react";

class NoteAppSearch extends React.Component {
	constructor(props) {
		super(props);
		this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
	}

	onSearchEventHandler(event) {
		event.preventDefault();
		this.props.onSearch(event.target.value.toLowerCase());
	}

	render() {
		return (
			<div className="note-app__search">
				<div className="nav-brand">
					<img src="./public/quill-drawing-a-line.png" alt="icon pen" />
					<h1>Notes</h1>
				</div>
				<input
					type="search"
					id="search"
					placeholder="Cari"
					onKeyUp={this.onSearchEventHandler}
				/>
			</div>
		);
	}
}

export default NoteAppSearch;
