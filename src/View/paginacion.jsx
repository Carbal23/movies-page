export const Paginacion = ({ pagina, totalPage, onChange }) => {
  const getpage = () => {
    let resultarray = [];
    for (let i = 0; i < totalPage; i++) {
        let page=(i+1)
      resultarray.push(
        <a onClick={()=>onChange(page)} className={pagina === page? "active" : ""}>
          {page}
        </a>
      );
    }
    return resultarray;
  };
  return (
    <div className="topbar-filter">
      <div className="pagination2">
        <span>
          Pagina {pagina} de {totalPage}:
        </span>
        {getpage()}
      </div>
    </div>
  );
};
