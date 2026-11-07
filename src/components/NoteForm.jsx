import { useState } from "react";
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";

const NoteForm = ({ notes, setNotes }) => {
	const [formData, setFormData] = useState({
		title: '',
		priority: 'Medium',
		category: 'Work',
		description: ''
	});

	const [isFormVisible, setIsFormVisible] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(!formData.title || !formData.description) return;

		const newNote = {
			id: Date.now(),
			...formData
		};

		setNotes([newNote, ...notes]);

		setFormData({
			title: '',
			priority: 'Medium',
			category: 'Work',
			description: ''
		});
	}

	return (
		<>
			<button onClick={() => setIsFormVisible(!isFormVisible)}  className="w-full bg-gray-100 border border-gray-300 rounded-lg cursor-pointer text-purple-800 py-2 hover:bg-purple-200 transition mb-4">
				{
					isFormVisible ? " ❌ Hide Form" : " ➕ Add New Note"
				}
			</button>
			{
				isFormVisible && (
					<form className="mb-6" onSubmit={handleSubmit} >
						<TextInput label="title" name="title"  value={formData.title} onChange={handleChange} required />

						<div className="mb-4">
							<label htmlFor="priority" className="block font-semibold">
								Priority
							</label>
							<select 
								name="priority"
								type="text" 
								className="w-full p-2 border rounded-lg" 
								value={formData.priority} 
								onChange={handleChange}
							>
								<option value="High" > 🔴 High </option>
								<option value="Medium" >  🟢 Medium </option>
								<option value="Low" >  🟡 Low </option>
							</select>
						</div>

						<SelectInput
							label="category"
							name="category"
							value={formData.category}
							onChange={handleChange}
							options={[
								{value: "Work", context: "📁 Work"},
								{value: "Personal", context: "🏠 Personal"},
								{value: "Ideas", context: "💡 Ideas" }
							]}
						/>

						<div className="mb-4">
							<label htmlFor="description" className="block font-semibold">
								Description
							</label>
							<textarea
								name="description"
								type="text" 
								className="w-full p-2 border rounded-lg" 
								value={formData.description} 
								onChange={handleChange}
							>
							</textarea>
							<button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600 ">
								Add Note
							</button>
						</div>
					</form>
				)
			}
		</>
		
	)
}

export default NoteForm