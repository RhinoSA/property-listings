import React from "react";
import { useContext } from "react";
import { MammalContext } from "../../../contextmammals";

// Get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function MammalFilter({ mammals }) {
  const capitalize = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const context = useContext(MammalContext);
  //console.log(context);
  const { handleChange, order, family, carnivora } = context;
  // Get unique types
  let types = getUnique(mammals, "order");
  // Add all
  types = ["all", ...types];
  // Map types to JSX
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {capitalize(item)}
      </option>
    );
  });

  let families = getUnique(mammals, "family");
  // Add all
  families = ["all", ...families];
  // Map types to JSX
  families = families.map((item, index) => {
    return (
      <option value={item} key={index}>
        {capitalize(item)}
      </option>
    );
  });

  return (
    <section className="filter-wrapper mb-4">
      <h2>Mammal Species</h2>
      <p>
        Below is a list of all the mammal species that one finds in southern
        Africa.
      </p>
      <form className="form-inline mt-3 alert alert-secondary">
        {/* Select Order */}
        <div className="form-group mr-3">
          <label htmlFor="order">Order</label>
          <select
            name="order"
            id="order"
            value={order}
            className="form-control ml-2"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* End Select Order */}
        {/* Select Family */}
        <div className="form-group">
          <label htmlFor="family">Family</label>
          <select
            name="family"
            id="family"
            value={family}
            className="form-control ml-2"
            onChange={handleChange}
          >
            {families}
          </select>
        </div>
        {/* End Select Family */}
        <div className="form-group">
          <input
            className="form-check-input ml-2"
            type="checkbox"
            name="carnivora"
            id="carnivora"
            checked={carnivora}
            onChange={handleChange}
          />
          <label htmlFor="featured" className="form-check-label">
            Carnivora
          </label>
        </div>
      </form>
    </section>
  );
}
