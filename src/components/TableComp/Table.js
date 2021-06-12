import React from "react";
import { Table } from "react-bootstrap";

const TableComp = ({ data = [] }) => {
  return (
    <Table className="table-responsive table-bordered">
      <thead className="thead-light">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Tag Line</th>
          <th>First Brewed</th>
          <th>Description</th>
          <th>Ingredients</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.tagline}</td>
            <td>{item.first_brewed}</td>
            <td>{item.description}</td>
            <td>
              <React.Fragment>
                {`Hops - 
                  `}
                {item.ingredients.hops.length &&
                  item.ingredients.hops.map((ingr, index) => (
                    <div key={index}>
                      {`${ingr.name} - ${ingr.amount.value} ${ingr.amount.unit} - ${ingr.add} - ${ingr.attribute}`}
                    </div>
                  ))}
                {`Malt - 
                  `}
                {item.ingredients.malt.length &&
                  item.ingredients.malt.map((ingr, index) => (
                    <div key={index}>
                      {`${ingr.name} - ${ingr.amount.value} ${ingr.amount.unit}`}
                    </div>
                  ))}
                {`Yeast - 
                  `}
                <div>{item.ingredients.yeast}</div>
              </React.Fragment>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComp;
