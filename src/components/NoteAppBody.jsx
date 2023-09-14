import React from "react";

class NoteAppBody extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			body: "",
		};

		this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
		this.onTitleKeyUpEventHandler = this.onTitleKeyUpEventHandler.bind(this);
		this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
		this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
	}

	onTitleChangeEventHandler(event) {
		this.setState((prevState) => {
			return {
				...prevState,
				title: event.target.value,
			};
		});
	}

	onTitleKeyUpEventHandler(event) {
		this.props.limit(event.target.value.length);
	}

	onBodyChangeEventHandler(event) {
		this.setState((prevState) => {
			return {
				...prevState,
				body: event.target.value,
			};
		});
	}

	onSubmitEventHandler(event) {
		event.preventDefault();
		this.props.addNote(this.state);
		this.setState({
			title: "",
			body: "",
		});
		this.props.limit(0);
	}

	render() {
		return (
			<form className="note-app__body" onSubmit={this.onSubmitEventHandler}>
				<input
					type="text"
					className="note-app__input"
					placeholder="Tuliskan judul catatan"
					id="title"
					value={this.state.title}
					onChange={this.onTitleChangeEventHandler}
					onKeyUp={this.onTitleKeyUpEventHandler}
					maxLength={this.props.maxChar}
				/>
				<textarea
					type="text"
					className="note-app__input"
					placeholder="Tuliskan catatan disini"
					id="body"
					value={this.state.body}
					onChange={this.onBodyChangeEventHandler}
				/>
				<button className="note-app__body-button" type="submit">
					Buat
				</button>
			</form>
		);
	}
}

export default NoteAppBody;
