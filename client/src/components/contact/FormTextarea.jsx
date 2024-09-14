const FormTextarea = ({ label, id, register, required, minLength }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <textarea
      id={id}
      rows={4}
      {...register(id, { required, minLength })}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
    />
  </div>
);

export default FormTextarea;
