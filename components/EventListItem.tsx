import Feather from '@expo/vector-icons/Feather';
import dayjs from 'dayjs';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { supabase } from '~/utils/supabase';

export default function EventListItem({ event }) {
  const [numberOfAttendees, setNumberOfAttendees] = useState(0);

  useEffect(() => {
    fetchNumberOfAttendees();
  }, [event.id]);

  const fetchNumberOfAttendees = async () => {
    const { count } = await supabase
      .from('attendance')
      .select('*', { count: 'exact', head: true })
      .eq('event_id', event.id);
    setNumberOfAttendees(count);
  };
  return (
    <Link href={`/event/${event.id}`} asChild>
      <Pressable className="m-3 gap-3 border-b-2 border-gray-100 pb-3">
        <View className="flex-row">
          <View className="flex-1 gap-2">
            <Text className="text-lg font-semibold uppercase text-amber-700">
              {dayjs(event.date).format('ddd, D MMM')} · {dayjs(event.date).format('h:mm A')}
            </Text>
            <Text className="text-2xl font-bold" numberOfLines={2}>
              {event.title}
            </Text>
            <Text className="text-gray-700">City Hall </Text>
          </View>

          <Image source={{ uri: event.image_uri }} className="aspect-video w-2/5 rounded-xl" />
        </View>
        {/* Footer goes here */}
        <View className="flex-row gap-3">
          <Text className="mr-auto text-gray-700">{numberOfAttendees} going</Text>
          <Feather name="share" size={20} color="grey" />
          <Feather name="bookmark" size={20} color="grey" />
        </View>
      </Pressable>
    </Link>
  );
}
