import { StyleSheet, useColorScheme } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, SafeAreaView, ScrollView } from '../../components/Themed';
import Header from '../../components/Header/Header';

export default function NewPostScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='New Post'/>
      <ScrollView>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/newPost.tsx" />
      </ScrollView> 
         
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
