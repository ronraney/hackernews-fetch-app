const Table = ({ list, onDismiss }) =>
  <div className="table">
    <div className="table-row">
      <span style={largeColumn}>Title</span>
      <span style={smallColumn}>Author</span>
      <span style={midColumn}>Number of Comments</span>
      <span style={smallColumn}>Points</span>
    </div>
    {list.map(item =>
      <div key={item.objectID} className="table-row">
        <span style={largeColumn}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={smallColumn}>{item.author}</span>
        <span style={midColumn}>{item.num_comments}</span>
        <span style={smallColumn}>{item.points}</span>
        <span style={smallColumn}>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            Dismiss
          </Button>
        </span>
      </div>
    )}
  </div>
