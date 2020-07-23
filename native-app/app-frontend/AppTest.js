import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return;
    };
    
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle } 
      ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalid => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalid)
    })
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new Goal"onPress={() => setIsAddMode(true)} />
      <GoalInput
       visible={isAddMode} 
       onAddGoal={addGoalHandler}
       onCancel={cancelGoalAdditionHandler}
      />

      <FlatList
        KeyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={ itemData => 
          <GoalItem id={itemData.item.id} 
          onDelete={removeGoalHandler} title={itemData.item.value} 
          />}
      />
      <View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
    }
});