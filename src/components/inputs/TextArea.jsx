const TextArea = ({ label, name, value, onChange, required = false }) => {
  return (
	<div className="mb-4">
		<label htmlFor={label} className="block font-semibold">
			Description
		</label>
		<textarea
			name={name}
			type="text" 
			className="w-full p-2 border rounded-lg" 
			value={value} 
			onChange={onChange}
			required
		>
		</textarea>
	</div>
  )
}

export default TextArea