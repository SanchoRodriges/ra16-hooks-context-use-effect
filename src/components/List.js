function List({links, click}) {
  return (
        links.map( link => <li onClick={() => click(link)} key={link.id}>{link.name}</li> 
      )
  );
}

export default List;
