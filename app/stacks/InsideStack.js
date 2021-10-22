import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { themes } from "../constants/colors";
import QueueListView from "../ee/omnichannel/views/QueueListView";
import { CustomIcon } from "../lib/Icons";
import { ThemeContext } from "../theme";
import { defaultHeader, ModalAnimation, StackAnimation, themedHeader } from "../utils/navigation";
import AddChannelTeamView from "../views/AddChannelTeamView";
import AddExistingChannelView from "../views/AddExistingChannelView";
// Admin Stack
import AdminPanelView from "../views/AdminPanelView";
// InsideStackNavigator
import AttachmentView from "../views/AttachmentView";
import AutoTranslateView from "../views/AutoTranslateView";
import CannedResponseDetail from "../views/CannedResponseDetail";
import CannedResponsesListView from "../views/CannedResponsesListView";
import CreateChannelView from "../views/CreateChannelView";
import CreateDiscussionView from "../views/CreateDiscussionView";
import DefaultBrowserView from "../views/DefaultBrowserView";
import DirectoryView from "../views/DirectoryView";
// Display Preferences View
import DisplayPrefsView from "../views/DisplayPrefsView";
import E2EEncryptionSecurityView from "../views/E2EEncryptionSecurityView";
// E2EEnterYourPassword Stack
import E2EEnterYourPasswordView from "../views/E2EEnterYourPasswordView";
import E2EHowItWorksView from "../views/E2EHowItWorksView";
// E2ESaveYourPassword Stack
import E2ESaveYourPasswordView from "../views/E2ESaveYourPasswordView";
import ForwardLivechatView from "../views/ForwardLivechatView";
import InviteUsersEditView from "../views/InviteUsersEditView";
import InviteUsersView from "../views/InviteUsersView";
import JitsiMeetView from "../views/JitsiMeetView";
import LanguageView from "../views/LanguageView";
import LivechatEditView from "../views/LivechatEditView";
import MarkdownTableView from "../views/MarkdownTableView";
import MessagesView from "../views/MessagesView";
import ModalBlockView from "../views/ModalBlockView";
// NewMessage Stack
import NewMessageView from "../views/NewMessageView";
import NotificationPrefView from "../views/NotificationPreferencesView";
import PickerView from "../views/PickerView";
// Profile Stack
import ProfileView from "../views/ProfileView";
import ReadReceiptsView from "../views/ReadReceiptView";
import RoomActionsView from "../views/RoomActionsView";
import RoomInfoEditView from "../views/RoomInfoEditView";
import RoomInfoView from "../views/RoomInfoView";
import RoomMembersView from "../views/RoomMembersView";
import RoomsListView from "../views/RoomsListView";
// Chats Stack
import RoomView from "../views/RoomView";
import ScreenLockConfigView from "../views/ScreenLockConfigView";
import SearchMessagesView from "../views/SearchMessagesView";
import SecurityPrivacyView from "../views/SecurityPrivacyView";
import SelectedUsersView from "../views/SelectedUsersView";
import SelectListView from "../views/SelectListView";
// Settings Stack
import SettingsView from "../views/SettingsView";
import ShareView from "../views/ShareView";
import StatusView from "../views/StatusView";
import TeamChannelsView from "../views/TeamChannelsView";
import ThemeView from "../views/ThemeView";
import ThreadMessagesView from "../views/ThreadMessagesView";
import UserNotificationPrefView from "../views/UserNotificationPreferencesView";
import UserPreferencesView from "../views/UserPreferencesView";
import VisitorNavigationView from "../views/VisitorNavigationView";

// ChatsStackNavigator
const ChatsStack = createStackNavigator();
const ChatsStackNavigator = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <ChatsStack.Navigator
      screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...StackAnimation }}>
      <ChatsStack.Screen name="RoomsListView" component={RoomsListView} />
      <ChatsStack.Screen name="RoomView" component={RoomView} />
      <ChatsStack.Screen
        name="RoomActionsView"
        component={RoomActionsView}
        options={RoomActionsView.navigationOptions}
      />
      <ChatsStack.Screen
        name="SelectListView"
        component={SelectListView}
        options={SelectListView.navigationOptions}
      />
      <ChatsStack.Screen
        name="RoomInfoView"
        component={RoomInfoView}
        options={RoomInfoView.navigationOptions}
      />
      <ChatsStack.Screen
        name="RoomInfoEditView"
        component={RoomInfoEditView}
        options={RoomInfoEditView.navigationOptions}
      />
      <ChatsStack.Screen
        name="RoomMembersView"
        component={RoomMembersView}
        options={RoomMembersView.navigationOptions}
      />
      <ChatsStack.Screen
        name="SearchMessagesView"
        component={SearchMessagesView}
        options={SearchMessagesView.navigationOptions}
      />
      <ChatsStack.Screen name="SelectedUsersView" component={SelectedUsersView} />
      <ChatsStack.Screen
        name="InviteUsersView"
        component={InviteUsersView}
        options={InviteUsersView.navigationOptions}
      />
      <ChatsStack.Screen
        name="InviteUsersEditView"
        component={InviteUsersEditView}
        options={InviteUsersEditView.navigationOptions}
      />
      <ChatsStack.Screen name="MessagesView" component={MessagesView} />
      <ChatsStack.Screen
        name="AutoTranslateView"
        component={AutoTranslateView}
        options={AutoTranslateView.navigationOptions}
      />
      <ChatsStack.Screen
        name="DirectoryView"
        component={DirectoryView}
        options={DirectoryView.navigationOptions}
      />
      <ChatsStack.Screen
        name="NotificationPrefView"
        component={NotificationPrefView}
        options={NotificationPrefView.navigationOptions}
      />
      <ChatsStack.Screen
        name="VisitorNavigationView"
        component={VisitorNavigationView}
        options={VisitorNavigationView.navigationOptions}
      />
      <ChatsStack.Screen
        name="ForwardLivechatView"
        component={ForwardLivechatView}
        options={ForwardLivechatView.navigationOptions}
      />
      <ChatsStack.Screen
        name="LivechatEditView"
        component={LivechatEditView}
        options={LivechatEditView.navigationOptions}
      />
      <ChatsStack.Screen
        name="PickerView"
        component={PickerView}
        options={PickerView.navigationOptions}
      />
      <ChatsStack.Screen
        name="ThreadMessagesView"
        component={ThreadMessagesView}
        options={ThreadMessagesView.navigationOptions}
      />
      <ChatsStack.Screen
        name="TeamChannelsView"
        component={TeamChannelsView}
        options={TeamChannelsView.navigationOptions}
      />
      <ChatsStack.Screen
        name="CreateChannelView"
        component={CreateChannelView}
        options={CreateChannelView.navigationOptions}
      />
      <ChatsStack.Screen
        name="AddChannelTeamView"
        component={AddChannelTeamView}
        options={AddChannelTeamView.navigationOptions}
      />
      <ChatsStack.Screen
        name="AddExistingChannelView"
        component={AddExistingChannelView}
        options={AddExistingChannelView.navigationOptions}
      />
      <ChatsStack.Screen
        name="MarkdownTableView"
        component={MarkdownTableView}
        options={MarkdownTableView.navigationOptions}
      />
      <ChatsStack.Screen
        name="ReadReceiptsView"
        component={ReadReceiptsView}
        options={ReadReceiptsView.navigationOptions}
      />
      <ChatsStack.Screen
        name="QueueListView"
        component={QueueListView}
        options={QueueListView.navigationOptions}
      />
      <ChatsStack.Screen
        name="CannedResponsesListView"
        component={CannedResponsesListView}
        options={CannedResponsesListView.navigationOptions}
      />
      <ChatsStack.Screen
        name="CannedResponseDetail"
        component={CannedResponseDetail}
        options={CannedResponseDetail.navigationOptions}
      />
    </ChatsStack.Navigator>
  );
};

// ProfileStackNavigator
const ProfileStack = createStackNavigator();
const ProfileStackNavigator = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <ProfileStack.Navigator
      screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...StackAnimation }}>
      <ProfileStack.Screen
        name="ProfileView"
        component={ProfileView}
        options={ProfileView.navigationOptions}
      />
      <ProfileStack.Screen
        name="UserPreferencesView"
        component={UserPreferencesView}
        options={UserPreferencesView.navigationOptions}
      />
      <ProfileStack.Screen
        name="UserNotificationPrefView"
        component={UserNotificationPrefView}
        options={UserNotificationPrefView.navigationOptions}
      />
      <ProfileStack.Screen
        name="PickerView"
        component={PickerView}
        options={PickerView.navigationOptions}
      />
    </ProfileStack.Navigator>
  );
};

// SettingsStackNavigator
const SettingsStack = createStackNavigator();
const SettingsStackNavigator = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <SettingsStack.Navigator
      screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...StackAnimation }}>
      <SettingsStack.Screen
        name="SettingsView"
        component={SettingsView}
        options={SettingsView.navigationOptions}
      />
      <SettingsStack.Screen
        name="SecurityPrivacyView"
        component={SecurityPrivacyView}
        options={SecurityPrivacyView.navigationOptions}
      />
      <SettingsStack.Screen
        name="E2EEncryptionSecurityView"
        component={E2EEncryptionSecurityView}
        options={E2EEncryptionSecurityView.navigationOptions}
      />
      <SettingsStack.Screen
        name="LanguageView"
        component={LanguageView}
        options={LanguageView.navigationOptions}
      />
      <SettingsStack.Screen
        name="ThemeView"
        component={ThemeView}
        options={ThemeView.navigationOptions}
      />
      <SettingsStack.Screen
        name="DefaultBrowserView"
        component={DefaultBrowserView}
        options={DefaultBrowserView.navigationOptions}
      />
      <SettingsStack.Screen
        name="ScreenLockConfigView"
        component={ScreenLockConfigView}
        options={ScreenLockConfigView.navigationOptions}
      />
    </SettingsStack.Navigator>
  );
};

// AdminPanelStackNavigator
const AdminPanelStack = createStackNavigator();
const AdminPanelStackNavigator = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <AdminPanelStack.Navigator
      screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...StackAnimation }}>
      <AdminPanelStack.Screen
        name="AdminPanelView"
        component={AdminPanelView}
        options={AdminPanelView.navigationOptions}
      />
    </AdminPanelStack.Navigator>
  );
};

// DisplayPreferenceNavigator
const DisplayPrefStack = createStackNavigator();
const DisplayPrefStackNavigator = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <DisplayPrefStack.Navigator
      screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...StackAnimation }}>
      <DisplayPrefStack.Screen name="DisplayPrefsView" component={DisplayPrefsView} />
    </DisplayPrefStack.Navigator>
  );
};

// DrawerNavigator
const Tab = createMaterialBottomTabNavigator();

const DrawerNavigator = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "Chats",
          tabBarIcon: () => <CustomIcon name="message" size={20} color={themes[theme].titleText} />
        }}
        name="ChatsStackNavigator"
        component={ChatsStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => <CustomIcon name="user" size={20} color={themes[theme].titleText} />
        }}
        name="ProfileStackNavigator"
        component={ProfileStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: () => <CustomIcon name="settings" size={20} color={themes[theme].titleText} />
        }}
        name="SettingsStackNavigator"
        component={SettingsStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Display",
          tabBarIcon: () => <CustomIcon name="sort" size={20} color={themes[theme].titleText} />
        }}
        name="DisplayPrefStackNavigator"
        component={DisplayPrefStackNavigator}
      />
    </Tab.Navigator>
  );
};

// NewMessageStackNavigator
const NewMessageStack = createStackNavigator();
const NewMessageStackNavigator = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <NewMessageStack.Navigator
      screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...StackAnimation }}>
      <NewMessageStack.Screen
        name="NewMessageView"
        component={NewMessageView}
        options={NewMessageView.navigationOptions}
      />
      <NewMessageStack.Screen name="SelectedUsersViewCreateChannel" component={SelectedUsersView} />
      <NewMessageStack.Screen
        name="CreateChannelView"
        component={CreateChannelView}
        options={CreateChannelView.navigationOptions}
      />
      <NewMessageStack.Screen name="CreateDiscussionView" component={CreateDiscussionView} />
    </NewMessageStack.Navigator>
  );
};

// E2ESaveYourPasswordStackNavigator
const E2ESaveYourPasswordStack = createStackNavigator();
const E2ESaveYourPasswordStackNavigator = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <E2ESaveYourPasswordStack.Navigator
      screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...StackAnimation }}>
      <E2ESaveYourPasswordStack.Screen
        name="E2ESaveYourPasswordView"
        component={E2ESaveYourPasswordView}
        options={E2ESaveYourPasswordView.navigationOptions}
      />
      <E2ESaveYourPasswordStack.Screen
        name="E2EHowItWorksView"
        component={E2EHowItWorksView}
        options={E2EHowItWorksView.navigationOptions}
      />
    </E2ESaveYourPasswordStack.Navigator>
  );
};

// E2EEnterYourPasswordStackNavigator
const E2EEnterYourPasswordStack = createStackNavigator();
const E2EEnterYourPasswordStackNavigator = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <E2EEnterYourPasswordStack.Navigator
      screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...StackAnimation }}>
      <E2EEnterYourPasswordStack.Screen
        name="E2EEnterYourPasswordView"
        component={E2EEnterYourPasswordView}
        options={E2EEnterYourPasswordView.navigationOptions}
      />
    </E2EEnterYourPasswordStack.Navigator>
  );
};

// InsideStackNavigator
const InsideStack = createStackNavigator();
const InsideStackNavigator = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <InsideStack.Navigator
      mode="modal"
      screenOptions={{ ...defaultHeader, ...themedHeader(theme), ...ModalAnimation }}>
      <InsideStack.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name="NewMessageStackNavigator"
        component={NewMessageStackNavigator}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name="E2ESaveYourPasswordStackNavigator"
        component={E2ESaveYourPasswordStackNavigator}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen
        name="E2EEnterYourPasswordStackNavigator"
        component={E2EEnterYourPasswordStackNavigator}
        options={{ headerShown: false }}
      />
      <InsideStack.Screen name="AttachmentView" component={AttachmentView} />
      <InsideStack.Screen name="StatusView" component={StatusView} />
      <InsideStack.Screen name="ShareView" component={ShareView} />
      <InsideStack.Screen
        name="ModalBlockView"
        component={ModalBlockView}
        options={ModalBlockView.navigationOptions}
      />
      <InsideStack.Screen
        name="JitsiMeetView"
        component={JitsiMeetView}
        options={{ headerShown: false }}
      />
    </InsideStack.Navigator>
  );
};

export default InsideStackNavigator;
