import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMessage } from "hooks/message.hook";
import { setNotification } from "Redux/notification";
import {
  CssBaseline,
  TextField,
  Container,
  Button,
  Grid,
  Link,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { getAuthenticate } from "Redux/authenticate";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./style";
import { IAuthForm } from "types/state";
import { useHttp } from "hooks/http.hook";
import { schemaEmail, schema } from "schema/authForm";
import { selectNotification } from "selectors/selectors";

export default function SignIn() {
  const [isLogIn, setIsLogIn] = useState(true);
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(isLogIn ? schemaEmail : schema),
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const [form, setForm] = useState({} as IAuthForm | any);
  const { loading, error, request, clearError } = useHttp();

  const notification = useSelector(selectNotification);

  const onSubmit = async () => {
    if (isLogIn) {
      dispatch(getAuthenticate({ type: "register", form }));
      // try {
      //   // const data =
      //   await request("/api/auth/register", "POST", { ...form });
      //   // message(data.message);
      //   console.log(data, "register");
      // } catch (e) {}
    } else {
      dispatch(getAuthenticate({ type: "login", form }));
      // try {
      //   const res = await request("/api/auth/login", "POST", { ...form });
      //   console.log(res, "login");
      //   // auth.login(data.token, data.userId);
      // } catch (e) {}
    }
    isLogIn ? "sign in" : "log in";
  };

  const onChange = (event: any) => {
    if (event.target.name === "isAdmin") {
      setForm({ ...form, [event.target.name]: !form.isAdmin });
    } else {
      setForm({ ...form, [event.target.name]: event.target.value });
    }
  };

  const onClickSetIsLogIn = () => {
    setIsLogIn(!isLogIn);
    setForm({ ...form, email: "", isAdmin: false });
  };

  const onClickClearNotification = () => {
    dispatch(setNotification(null));
  };

  return (
    <Container component="main" maxWidth="xs">
      {notification && (
        <Alert
          severity="error"
          action={
            <Button
              color="inherit"
              size="small"
              onClick={onClickClearNotification}
            >
              UNDO
            </Button>
          }
        >
          {notification}
        </Alert>
      )}

      <CssBaseline />

      <div className={classes.paper}>
        {isLogIn && (
          <TextField
            error={!!errors.email}
            autoFocus
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            onChange={onChange}
            inputRef={register()}
            helperText={errors.email?.message}
          />
        )}
        <TextField
          error={!!errors.login}
          autoFocus
          margin="normal"
          variant="outlined"
          required
          fullWidth
          id="login"
          label="Login"
          name="login"
          onChange={onChange}
          inputRef={register()}
          helperText={errors.login?.message}
        />
        <TextField
          error={!!errors.password}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={onChange}
          inputRef={register()}
          helperText={errors.password?.message}
        />

        {isLogIn && (
          <Grid container justify="flex-start" item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  onClick={onChange}
                  name="isAdmin"
                  checked={form.isAdmin}
                  color="primary"
                />
              }
              label="You are admin?"
            />
          </Grid>
        )}

        <Button
          onClick={handleSubmit(onSubmit)}
          disabled={loading}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {isLogIn ? "sign in" : "log in"}
        </Button>

        <Grid container justify="flex-end">
          <Grid item>
            <Link onClick={onClickSetIsLogIn} href="#" variant="body2">
              {isLogIn
                ? "Already have an account? Log in"
                : "Not have an account? Sign in"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
