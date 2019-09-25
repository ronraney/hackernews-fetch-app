const Search = ({
    value,
    onChange,
    onSubmit,
    children
  }) =>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        {children}
      </button>
    </form>

const largeColumn = {
  width: '40%',
}
const midColumn = {
  width: '25%',
};
const smallColumn = {
  width: '10%',
};
