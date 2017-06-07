import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Table extends Component {
  renderRows() {
    let rows = [];

    this.props.mpData.forEach((mp, index) => {
      const fulltext = Object.values(mp).join().toLowerCase();
      const searchValue = this.props.searchFieldValue.toLowerCase();

      if (!searchValue || fulltext.indexOf(searchValue) > -1) {
        let name = mp.name.split(',');
        name = name.reverse().join(' ');

        rows.push(
          <tr key={index}>
          <td>{name}</td>
          <td>{mp.party}</td>
          <td>{mp.electorate}</td>
          <td><a href={'mailto:' + mp.email}>{mp.email}</a></td>
          </tr>
        );
      }
    });

    return rows;
  }

  render() {

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Party</th>
            <th>Electorate</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  mpData: PropTypes.array.isRequired,
  searchFieldValue: PropTypes.string
};

export default Table;
