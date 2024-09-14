const FormInput = ({
  label,
  id,
  register,
  required,
  minLength,
  type = "text",
  placeholder,
  inputMode,
}) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      id={id}
      type={type}
      {...register(id, { required, minLength })}
      placeholder={placeholder}
      inputMode={inputMode}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
    />
  </div>
);

export default FormInput;
