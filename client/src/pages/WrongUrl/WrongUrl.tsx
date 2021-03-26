import React from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";

const WrongUrl: React.FC = (): JSX.Element => {
  const locationChange = useHistory();

  const onClick = () => {
    locationChange.push(`/`);
  };

  return (
    <div>
      <h1>вы могли сюда попасть по следующим причинам</h1>
      <p>1) не авторизировались</p>
      <p>2) ввели не существующий урл</p>
      <Button
        onClick={onClick}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Back
      </Button>
    </div>
  );
};

export default WrongUrl;
