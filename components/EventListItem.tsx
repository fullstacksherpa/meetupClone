import Feather from '@expo/vector-icons/Feather';
import { View, Text, Image } from 'react-native';

export default function EventListItem({ event }) {
  return (
    <View className="gap-3 p-3">
      <View className="flex-row">
        <View className="flex-1 gap-2">
          <Text className="text-lg font-semibold uppercase text-amber-700">
            Wed 13, Sep · 19:30 CET
          </Text>
          <Text className="text-2xl font-bold" numberOfLines={2}>
            {event.title}
          </Text>
          <Text className="text-gray-700">City Hall </Text>
        </View>

        <Image source={{ uri: event.image }} className="aspect-video w-2/5 rounded-xl" />
      </View>
      {/* Footer goes here */}
      <View className="flex-row gap-3">
        <Text className="mr-auto text-gray-700">16 going</Text>
        <Feather name="share" size={24} color="grey" />
        <Feather name="bookmark" size={24} color="grey" />
      </View>
    </View>
  );
}
