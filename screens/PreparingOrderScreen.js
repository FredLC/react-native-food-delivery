import { useNavigation } from "@react-navigation/native";
import { View, Text, SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderProcessing.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="w-96 h-96"
      />

      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
