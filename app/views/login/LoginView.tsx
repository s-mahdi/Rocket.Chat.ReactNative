import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Keyboard, Text } from "react-native";
import { connect } from "react-redux";
import { loginRequest as loginRequestAction } from "../../actions/login";
import { serverRequest } from "../../actions/server";
import { themes } from "../../constants/colors";
import Button from "../../containers/Button";
import FormContainer, { FormContainerInner } from "../../containers/FormContainer";
import * as HeaderButton from "../../containers/HeaderButton";
import LoginServices from "../../containers/LoginServices";
import TextInput from "../../containers/TextInput";
import I18n from "../../i18n";
import { withTheme } from "../../theme";
import sharedStyles from "../Styles";
import { loginStyles } from "./LoginStyles";

interface IProps {
  connecting: boolean;
  navigation: StackNavigationProp<any>;
  route: RouteProp<any, "RegisterView">;
  Site_Name: string;
  Accounts_RegistrationForm: string;
  Accounts_ShowFormLogin: boolean;
  isFetching: boolean;
  error: {
    error: string;
  };
  failure: boolean;
  theme: string;
  loginRequest: Function;
  connecUniplato: Function;
  inviteLinkToken: string;
}

class LoginView extends React.Component<IProps, any> {
  private passwordInput: any;

  static navigationOptions = ({ route, navigation }: Partial<IProps>) => ({
    title: route?.params?.title ?? "Rocket.Chat",
    headerRight: () => <HeaderButton.Legal testID="login-view-more" navigation={navigation} />
  });

  constructor(props: IProps) {
    super(props);
    this.state = {
      user: props.route.params?.username ?? "",
      password: ""
    };
  }

  componentDidMount() {
    const { connecUniplato } = this.props;
    connecUniplato();
  }

  valid = () => {
    const { user, password } = this.state;
    return user.trim() && password.trim();
  };

  submit = () => {
    if (!this.valid()) {
      return;
    }

    const { user, password } = this.state;
    const { loginRequest } = this.props;
    Keyboard.dismiss();
    loginRequest({ user, password });
  };

  renderUserForm = () => {
    const { user } = this.state;
    const { isFetching, theme, connecting } = this.props;

    return (
      <>
        <Text
          style={[loginStyles.title, sharedStyles.textBold, { color: themes[theme].titleText }]}>
          {I18n.t("Login")}
        </Text>
        <TextInput
          label={I18n.t("Username_or_email")}
          containerStyle={loginStyles.inputContainer}
          placeholder={I18n.t("Username_or_email")}
          keyboardType="email-address"
          returnKeyType="next"
          onChangeText={(value: string) => this.setState({ user: value })}
          onSubmitEditing={() => {
            this.passwordInput.focus();
          }}
          testID="login-view-email"
          textContentType="username"
          autoCompleteType="username"
          theme={theme}
          value={user}
        />
        <TextInput
          label={I18n.t("Password")}
          containerStyle={loginStyles.inputContainer}
          inputRef={e => {
            this.passwordInput = e;
          }}
          placeholder={I18n.t("Password")}
          returnKeyType="send"
          secureTextEntry
          onSubmitEditing={this.submit}
          onChangeText={(value: string) => this.setState({ password: value })}
          testID="login-view-password"
          textContentType="password"
          autoCompleteType="password"
          theme={theme}
        />
        <Button
          title={I18n.t("Login")}
          type="primary"
          onPress={this.submit}
          testID="login-view-submit"
          loading={isFetching}
          disabled={!this.valid() || connecting}
          theme={theme}
          style={loginStyles.loginButton}
        />
        {connecting && <Text>Conning to Uniplato server. Please wait...</Text>}
      </>
    );
  };

  render() {
    const { Accounts_ShowFormLogin, navigation, theme } = this.props;

    return (
      <FormContainer theme={theme} testID="login-view">
        <FormContainerInner>
          <LoginServices separator={Accounts_ShowFormLogin} navigation={navigation} />
          {this.renderUserForm()}
        </FormContainerInner>
      </FormContainer>
    );
  }
}

const mapStateToProps = (state: any) => ({
  connecting: state.server.connecting,
  Site_Name: state.settings.Site_Name,
  Accounts_ShowFormLogin: state.settings.Accounts_ShowFormLogin,
  Accounts_RegistrationForm: state.settings.Accounts_RegistrationForm,
  isFetching: state.login.isFetching,
  failure: state.login.failure,
  error: state.login.error && state.login.error.data,
  inviteLinkToken: state.inviteLinks.token
});

const mapDispatchToProps = (dispatch: any) => ({
  loginRequest: (params: any) => dispatch(loginRequestAction(params)),
  connecUniplato: () => {
    dispatch(serverRequest("https://chat.uniplato.us"));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(LoginView));
