import {createStackNavigator} from '@react-navigation/stack';
import AddMoney from '../screens/home/earningsComponents/AddMoney';
import AddBank from '../screens/home/earningsComponents/AddBank';
import AdddebitCard from '../screens/home/earningsComponents/AdddebitCard';
import ApprovalWaitng from '../screens/onboarding/ApprovalWaitng';
import Bank from '../screens/home/earningsComponents/Bank';
import BankDetails from '../screens/home/earningsComponents/BankDetails';
import BusinessDetails from '../screens/registration/BusinessDetails';
import Chat from '../screens/home/Chat';
import ConnectWithEmail from '../screens/onboarding/ConnectWithEmail';
import ConnectWithPhone from '../screens/onboarding/ConnectWithPhone';
import ContactUsForm from '../screens/profile/ContactUsForm';
import CustomerSupport from '../screens/profile/CustomerSupport';
import Delivered from '../screens/orders/Delivered';
import Drop from '../screens/orders/activeOders/Drop';
import EditUserProfile from '../screens/profile/EditUserProfile';
import Emergency from '../screens/orders/Emergency';
import EarningsDashboard from '../screens/home/EarningsDashboard';
import OtpSplash from '../screens/onboarding/OtpSplash';
import OTPEnter from '../screens/onboarding/OTPEnter';
import PersonalInformation from '../screens/registration/PersonalInformation';
import PickUp from '../screens/orders/activeOders/PickUp';
import ProfileVehicle from '../screens/profile/ProfileVehicle';
import ScanFace from '../screens/registration/ScanFace';
import ScanfaceTake from '../screens/orders/ScanfaceTake';
import SelectLanguage from '../screens/onboarding/SelectLanguage';
import StoreName from '../screens/orders/StoreName';
import StoreNameSucuss from '../screens/orders/StoreNameSucuss';
import TabNavigator from './TabNavigator';
import TrackOrder from '../screens/orders/activeOders/TrackOrder';
import VehicleDetails from '../screens/registration/VehicleDetails';
import WithdrawMoney from '../screens/home/earningsComponents/WithdrawMoney';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddBank" component={AddBank} />
      <Stack.Screen name="AddMoney" component={AddMoney} />
      <Stack.Screen name="AdddebitCard" component={AdddebitCard} />
      <Stack.Screen name="ApprovalWaitng" component={ApprovalWaitng} />
      <Stack.Screen name="Bank" component={Bank} />
      <Stack.Screen name="BankDetails" component={BankDetails} />
      <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="ConnectWithEmail" component={ConnectWithEmail} />
      <Stack.Screen name="ConnectWithPhone" component={ConnectWithPhone} />
      <Stack.Screen name="ContactUsForm" component={ContactUsForm} />
      <Stack.Screen name="CustomerSupport" component={CustomerSupport} />
      <Stack.Screen name="Delivered" component={Delivered} />
      <Stack.Screen name="Drop" component={Drop} />
      <Stack.Screen name="EditUserProfile" component={EditUserProfile} />
      <Stack.Screen name="Emergency" component={Emergency} />
      <Stack.Screen name="EarningsDashboard" component={EarningsDashboard} />
      <Stack.Screen name="OtpSplash" component={OtpSplash} />
      <Stack.Screen name="OTPEnter" component={OTPEnter} />
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
      />
      <Stack.Screen name="PickUp" component={PickUp} />
      <Stack.Screen name="ProfileVehicle" component={ProfileVehicle} />
      <Stack.Screen name="ScanFace" component={ScanFace} />
      <Stack.Screen name="ScanfaceTake" component={ScanfaceTake} />
      <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
      <Stack.Screen name="StoreName" component={StoreName} />
      <Stack.Screen name="StoreNameSucuss" component={StoreNameSucuss} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="TrackOrder" component={TrackOrder} />
      <Stack.Screen name="VehicleDetails" component={VehicleDetails} />
      <Stack.Screen name="WithdrawMoney" component={WithdrawMoney} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
