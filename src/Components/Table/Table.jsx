import React from "react";
import { connect } from "react-redux";
import Headers from "./Headers";
import Body from "./Body";
import ExcelFileInput from "../ExcelFileInput";

import { addRow, validateCells, download } from "../../reducers";
import { MDBBtn } from "mdb-react-ui-kit";

class Table extends React.Component {
  render() {
    const { addRow, validateCells,download } = this.props;
    return (
      <div>
        <div className={"btn-bar"}>
          <div className="my-3">
            <MDBBtn
              className="btn btn-sm btn-light border boder-all mx-2"
              onClick={() => addRow()}
            >
              Add Row
            </MDBBtn>
            <ExcelFileInput />
            <MDBBtn
              className="btn btn-sm btn-light border boder-all mx-2"
              onClick={() => {download()}}
            >
              Export Data
            </MDBBtn>
          </div>
        </div>
        <div className={"table-wrapper"}>
          <div
            className={"table"}
            style={{ overflowY: "auto", padding: "18px" }}
          >
            <Headers />
            <Body />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  addRow,
  validateCells,
  download
};

export default connect(null, mapDispatchToProps)(Table);
