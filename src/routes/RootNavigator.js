import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/onboarding/Splash';
import Onboarding from '../screens/onboarding/Onboarding';
import TabNavigator from './TabNavigator';
import ConnectWithPhone from '../screens/onboarding/ConnectWithPhone';
import ConnectWithEmail from '../screens/onboarding/ConnectWithEmail';
import OtpSplash from '../screens/onboarding/OtpSplash';
import OTPEnter from '../screens/onboarding/OTPEnter';
import BusinessDetails from '../screens/registration/BusinessDetails';
import ApprovalWaitng from '../screens/onboarding/ApprovalWaitng';
import ScanFace from '../screens/registration/ScanFace';

import Chat from '../screens/home/Chat';
import EditUserProfile from '../screens/profile/EditUserProfile';
import CustomerSupport from '../screens/profile/CustomerSupport';
import ContactUsForm from '../screens/profile/ContactUsForm';
import SelectLanguage from '../screens/onboarding/SelectLanguage';
import StoreName from '../screens/orders/StoreName';
import PersonalInformation from '../screens/registration/PersonalInformation';
import VehicleDetails from '../screens/registration/VehicleDetails';
import ActiveOrder from '../screens/orders/activeOders/ActiveOrder';
import NewOrder from '../screens/orders/NewOrder';
import Delivered from '../screens/orders/Delivered';
import PickUp from '../screens/orders/activeOders/PickUp';
import Drop from '../screens/orders/activeOders/Drop';
import BankDetails from '../screens/home/earningsComponents/BankDetails';
import TrackOrder from '../screens/orders/activeOders/TrackOrder';
import ScanfaceTake from '../screens/orders/ScanfaceTake';
import ProfileVehicle from '../screens/profile/ProfileVehicle';
import StoreNameSucuss from '../screens/orders/StoreNameSucuss';
import EarningsDashboard from '../screens/home/EarningsDashboard';
import AddMoney from '../screens/home/earningsComponents/AddMoney';
import SendMoney from '../screens/home/earningsComponents/SendMoney';
import WithdrawMoney from '../screens/home/earningsComponents/WithdrawMoney';
import Bank from '../screens/home/earningsComponents/Bank';
import AddBank from '../screens/home/earningsComponents/AddBank';
import AdddebitCard from '../screens/home/earningsComponents/AdddebitCard';
import Emergency from '../screens/orders/Emergency';
import NotificationSingleScreen from '../screens/profile/NotificationSingleScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="ConnectWithPhone" component={ConnectWithPhone} />
      <Stack.Screen name="ConnectWithEmail" component={ConnectWithEmail} />
      <Stack.Screen name="ScanFace" component={ScanFace} />
     
      <Stack.Screen name="StoreName" component={StoreName} />
      <Stack.Screen name="OtpSplash" component={OtpSplash} />
      <Stack.Screen name="OTPEnter" component={OTPEnter} />
      <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
      <Stack.Screen name="ApprovalWaitng" component={ApprovalWaitng} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="EditUserProfile" component={EditUserProfile} />
      <Stack.Screen name="CustomerSupport" component={CustomerSupport} />
      <Stack.Screen name="ContactUsForm" component={ContactUsForm} />
      <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
    
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
      />
      <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
      <Stack.Screen name="NewOrder" component={NewOrder} />
      <Stack.Screen name="ActiveOrder" component={ActiveOrder} />
      <Stack.Screen name="Delivered" component={Delivered} />
      <Stack.Screen name="PickUp" component={PickUp} />
      <Stack.Screen name="Drop" component={Drop} />
      <Stack.Screen name="BankDetails" component={BankDetails} />
      <Stack.Screen name="TrackOrder" component={TrackOrder} />
      <Stack.Screen name="ScanfaceTake" component={ScanfaceTake} />
      <Stack.Screen name="ProfileVehicle" component={ProfileVehicle} />
      <Stack.Screen name="StoreNameSucuss" component={StoreNameSucuss} />
      <Stack.Screen name="EarningsDashboard" component={EarningsDashboard} />
      <Stack.Screen name="AddMoney" component={AddMoney} />
      <Stack.Screen name="SendMoney" component={SendMoney} />
      <Stack.Screen name="WithdrawMoney" component={WithdrawMoney} />
      <Stack.Screen name="Bank" component={Bank} />
      <Stack.Screen name="AddBank" component={AddBank} />
      <Stack.Screen name="AdddebitCard" component={AdddebitCard} />
      <Stack.Screen name="Emergency" component={Emergency} />
      <Stack.Screen
        name="NotificationSingleScreen"
        component={NotificationSingleScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
