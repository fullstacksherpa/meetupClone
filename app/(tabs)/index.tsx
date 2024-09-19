import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import EventListItem from '~/components/EventListItem';
import { supabase } from '~/utils/supabase';

export default function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEvents = async () => {
    const { data } = await supabase.from('events').select('*');
    setEvents(data);
  };
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <FlatList
        className="bg-white"
        data={events}
        renderItem={({ item }) => <EventListItem event={item} />}
      />
    </>
  );
}
