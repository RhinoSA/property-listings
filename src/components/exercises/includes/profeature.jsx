import React from "react";

export function ProFeature(FeatureComponent) {
  return function(props) {
    if (props.pro) {
      let { pro, ...childProps } = props;
      return <FeatureComponent {...childProps} />;
    } else {
      return (
        <h5 className="bg-warning text-white text-center p-2">
          This is a Pro Feature
        </h5>
      );
    }
  };
}
