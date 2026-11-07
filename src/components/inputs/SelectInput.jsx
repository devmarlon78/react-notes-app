const SelectInput = ( { label, name, value, onChange, options } ) => {
  return (
	<div className="mb-4">
		<label htmlFor={label} className="block font-semibold">
			Category
		</label>
		<select
			name={name}
			type="text" 
			className="w-full p-2 border rounded-lg" 
			value={value} 
			onChange={onChange}
		>	
			{options.length > 1 && (
				options.map((option) => (
					<option value={option.value} >  {option.context} </option>
				))
			)}
		</select>
	</div>
  )
}

export default SelectInput