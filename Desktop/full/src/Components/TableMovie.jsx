import React from "react";

function TableMovie(props) {
  return returnHtml(props.data);
}

function returnHtml(movies) {
  return (
    <div className="table table-movie">
      <div className="row table-head">
        <p className="table-element">Id</p>
        <p className="table-element">Title</p>
        <p className="table-element">Category</p>
        <p className="table-element">Date</p>
      </div>
      {/* De aici incep datele */}
      {mapTheMovies(movies)}
    </div>
  );
}

function mapTheMovies(data) {
  return data?.map((e) => {
    return (
      <div className="row table-content" key={e.id + 1}>
        <p className="table-element">{e.id}</p>
        <p className="table-element">{e.title}</p>
        <p className="table-element">{e.category}</p>
        <p className="table-element">{e.date}</p>
      </div>
    );
  });
}

export default TableMovie;
