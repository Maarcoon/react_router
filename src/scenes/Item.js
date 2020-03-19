import React, { useState, useEffect } from "react";

import { ItemDetail } from "../containers/ItemDetail";

function Item({ match, history, location }) {
  return <ItemDetail itemId={match.params.id} />;
}

export { Item };
