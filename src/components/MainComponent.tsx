import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import { fetch } from "../redux/actions/actionCreators";

export const MainComponent: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.fetchReducer);

  const update = (e: React.ChangeEvent<HTMLInputElement>) => {
    let city = e.target.value;
    if (city.length > 3) {
      dispatch(fetch(city));
    }
  };

  return (
    <div>
      <h1>This is the Main Component!</h1>
      <input
        type="text"
        onChange={update}
        placeholder="Enter City..."
        required
      />
      <div>
        {Object.keys(data).map((one) => {
          return (
            <h1>
              {one}: {data[one]}
            </h1>
          );
        })}
      </div>
    </div>
  );
};
