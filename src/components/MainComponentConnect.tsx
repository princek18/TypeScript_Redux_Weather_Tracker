import React from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "..";
import { fetch } from "../redux/actions/actionCreators";
import { Actions } from "../redux/reducers/reducers";

interface props {
  data: any,
  fetch: (city: string) => void;
}

const MainComponentConnect: React.FC<props> = ({ data, fetch }) => {
  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    let city = e.target.value;
    if (city.length > 3) {
      fetch(city);
    }
  };
  return (
    <div>
      <h1>This is the Main Component With Connect()!</h1>
      <input
        type="text"
        onChange={update}
        placeholder="Enter City..."
        required
      />
      <div>
        {Object.keys(data).map((one) => {
          return <h1>{one}: {data[one]}</h1>;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  console.log(state.fetchReducer);

  return {
    data: state.fetchReducer,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, {}, Actions>
) => {
  return {
    fetch: (city: string) => dispatch(fetch(city)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainComponentConnect);
