import React from "react";

const Danger = () => {
  return (
    <div className="p-3 border rounded-lg border-rose-500 bg-rose-50">
      <div className="text-xl font-medium text-rose-500 ">
        <h1>Danger zone</h1>
        <p className="text-sm font-normal">Potentially destructive actions.</p>
      </div>
    </div>
  );
};

export default Danger;
