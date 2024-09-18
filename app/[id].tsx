import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View, Image, Pressable } from 'react-native';
import dayjs from 'dayjs';

import events from '~/assets/events.json';

export default function EventPage() {
  const { id } = useLocalSearchParams();
  const event = events.find((e) => id === e.id);

  if (!event) {
    return <Text> Oops! Event not found</Text>;
  }
  return (
    <View className="flex-1 gap-3 bg-white p-3">
      <Stack.Screen
        options={{ title: 'Event', headerBackTitleVisible: false, headerTintColor: 'black' }}
      />
      <Image source={{ uri: event.image }} className="aspect-video w-full rounded-xl" />
      <Text className="text-3xl font-bold">{event.title}</Text>
      <Text className="text-lg font-semibold uppercase text-amber-700">
        {dayjs(event.datetime).format('ddd, D MMM')} · {dayjs(event.datetime).format('h:mm A')}
      </Text>
      <Text className="text-lg">{event.description}</Text>

      {/* FOOTER */}
      <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-between border-t-2 border-gray-400 p-3 pb-10">
        <Text className="text-lg font-semibold">Free</Text>
        <Pressable className="rounded-md bg-red-500 p-5 px-8">
          <Text className="font-bold text-white">Join and RSVP</Text>
        </Pressable>
      </View>
    </View>
  );
}
