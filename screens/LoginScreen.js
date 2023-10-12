import { useState } from "react";
import AuthContent from "../components/auth/AuthContent";
import { login } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { useRecoilState } from "recoil";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);

    try {
      await login(email, password);
    } catch (error) {
      Alert.alert("로그인 실패. 아이디 비밀번호 다시 확인바람.");
    }

    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="로그인중..." />;
  }

  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
