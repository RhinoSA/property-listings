import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import * as actions from "../actions";
import { sortSelector } from "../selectors";

const SortInfo = ({ sortParams, clearSortParams }) => (
  <StyledSortInfo>
    {sortParams && sortParams.key
      ? `Sorting By Key: ${sortParams.key} ${sortParams.order}`
      : "Table not sorted"}
    <br />
    <br />
    {sortParams && sortParams.key && (
      <button className="btn btn-secondary" onClick={() => clearSortParams()}>
        Clear Sort
      </button>
    )}
  </StyledSortInfo>
);
const StyledSortInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  flex-direction: column;
`;

const mapStateToProps = (state, props) => ({
  sortParams: sortSelector(state)
});

const mapDispatchToProps = dispatch => ({
  clearSortParams: bindActionCreators(actions.clearSortParams, dispatch)
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(SortInfo);
