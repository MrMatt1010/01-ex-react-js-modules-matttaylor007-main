const SortBy = () => {
  return (
    <div className="SortBy">
      <label htmlFor="sort">Sort by</label>
      <select id="sort" defaultValue="latest">
        <option value="latest">Latest</option>
        <option value="low">Price: Low</option>
        <option value="high">Price: High</option>
      </select>
    </div>
  );
};

export default SortBy;
