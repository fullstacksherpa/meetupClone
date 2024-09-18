import Feather from '@expo/vector-icons/Feather';
import { View, Text, Image } from 'react-native';
import dayjs from 'dayjs';

export default function EventListItem({ event }) {
  return (
    <View className="m-3 gap-3 border-b-2 border-gray-100 pb-3">
      <View className="flex-row">
        <View className="flex-1 gap-2">
          <Text className="text-lg font-semibold uppercase text-amber-700">
            {dayjs(event.datetime).format('ddd, D MMM')} · {dayjs(event.datetime).format('h:mm A')}
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
        <Feather name="share" size={20} color="grey" />
        <Feather name="bookmark" size={20} color="grey" />
      </View>
    </View>
  );
}
