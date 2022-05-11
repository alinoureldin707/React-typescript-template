import { createContext, FC, useEffect, useReducer } from "react";
import axios from "../../axios";
import { isValidToken, setSession } from "../utils/token";
import Loading from "../components/loading/Loading";
import { UserLogin } from "../types/UserTypes";

const initialState: {
  isAuthenticated: boolean;
  isInitialised: boolean;
  user: any;
} = {
  isAuthenticated: false,
  isInitialised: false,
  user: null,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INIT": {
      const { isAuthenticated, user } = action.payload;

      return {
        ...state,
        isAuthenticated,
        isInitialised: true,
        user,
      };
    }
    case "LOGIN": {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    case "REGISTER": {
      const { user } = action.payload;

      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => {},
  register: () => Promise.resolve(),
});

type Props = {
  children?: React.ReactNode;
};

export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (email: string, password: string) => {
    const response = await axios.post<UserLogin>("/api/auth/login", {
      email,
      password,
    });
    const { token, user } = response.data;

    setSession(token);

    dispatch({
      type: "LOGIN",
      payload: {
        user,
      },
    });
  };

  const register = async (
    email: string,
    username: string,
    password: string
  ) => {
    const response = await axios.post("/api/auth/register", {
      email,
      username,
      password,
    });

    const { token, user } = response.data;

    setSession(token);

    dispatch({
      type: "REGISTER",
      payload: {
        user,
      },
    });
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    (async () => {
      try {
        const token = window.localStorage.getItem("token");

        // check if the token is valid, if so then initialize it as authenticated and get the user data
        if (token && isValidToken(token)) {
          setSession(token);
          const response = await axios.get("/api/auth/profile");
          const { user } = response.data;

          dispatch({
            type: "INIT",
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: "INIT",
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        dispatch({
          type: "INIT",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    })();
  }, []);

  if (!state.isInitialised) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
