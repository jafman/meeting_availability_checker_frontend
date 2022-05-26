// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Calendar() {
  
  let query = useQuery();
  const code = query.get("code");
  const scope = query.get("scope");

  return (
    <div className="calendar">
      <h1>Calendar Page</h1>
      <h5>Code</h5>
      <p>{code}</p>
      <h5>Scope</h5>
      <p>{scope}</p>
    </div>
  );

}

export default Calendar;

