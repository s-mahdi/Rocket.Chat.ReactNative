import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { connect } from "react-redux";
import { ThemeContext } from "../theme";
import { defaultHeader, ModalAnimation, StackAnimation, themedHeader } from "../utils/navigation";
import AuthenticationWebView from "../views/AuthenticationWebView";
import ForgotPasswordView from "../views/ForgotPasswordView";
import LegalView from "../views/LegalView";
import LoginView from "../views/login/LoginView";
import RegisterView from "../views/RegisterView";
import SendEmailConfirmationView from "../views/SendEmailConfirmationView";
import WorkspaceView from "../views/WorkspaceView";

// Outsid
const Outside = createStackNavigator();
const _OutsideStack = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Outside.Navigator
      initialRouteName="LoginView"
      screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...StackAnimation }}>
      <Outside.Screen
        name="WorkspaceView"
        component={WorkspaceView}
        options={WorkspaceView.navigationOptions}
      />
      <Outside.Screen name="LoginView" component={LoginView} options={{ headerShown: false }} />
      <Outside.Screen
        name="ForgotPasswordView"
        component={ForgotPasswordView}
        options={ForgotPasswordView.navigationOptions}
      />
      <Outside.Screen
        name="SendEmailConfirmationView"
        component={SendEmailConfirmationView}
        options={SendEmailConfirmationView.navigationOptions}
      />
      <Outside.Screen
        name="RegisterView"
        component={RegisterView}
        options={RegisterView.navigationOptions}
      />
      <Outside.Screen
        name="LegalView"
        component={LegalView}
        options={LegalView.navigationOptions}
      />
    </Outside.Navigator>
  );
};

const mapStateToProps = state => ({
  root: state.app.root
});

const OutsideStack = connect(mapStateToProps)(_OutsideStack);

// OutsideStackModal
const OutsideModal = createStackNavigator();
const OutsideStackModal = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <OutsideModal.Navigator
      mode="modal"
      screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...ModalAnimation }}>
      <OutsideModal.Screen
        name="OutsideStack"
        component={OutsideStack}
        options={{ headerShown: false }}
      />
      <OutsideModal.Screen
        name="AuthenticationWebView"
        component={AuthenticationWebView}
        options={AuthenticationWebView.navigationOptions}
      />
    </OutsideModal.Navigator>
  );
};

export default OutsideStackModal;
