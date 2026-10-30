const NoteList = ({ notes }) => {
	if(notes.length === 0) {
		return (
			<p className="text-center text-gray-500" >
				No Notes Yet!!!.
			</p>
		);
	}

	return (
		<div className="space-y-4" >
			{
				notes.map((note) => (
					<div key={note.id} className="p-4 bg-white rounded-lg shadow-md border-l-4  ">
						<h3 className="text-lg font-bold" >
							{note.title}
						</h3>
					</div>
				))
			}
		</div>
	)
}

export default NoteList