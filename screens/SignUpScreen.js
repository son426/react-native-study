import { useState } from "react";
import AuthContent from "../components/auth/AuthContent";
import { createUser } from "../util.js/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Text, View } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isError, setIsError] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);

    try {
      await createUser(email, password);
    } catch (error) {
      Alert.alert("회원가입 실패. 유효한 아이디 비밀번호 입력바람");
    }

    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="유저 생성중..." />;
  }

  return isError ? (
    <View>
      <Text>에러</Text>
    </View>
  ) : (
    <AuthContent onAuthenticate={signupHandler} />
  );
}

export default SignupScreen;
