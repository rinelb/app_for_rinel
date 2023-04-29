import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Table, Row } from 'react-native-table-component';

import book from '../data/book/books.json';

const BasicBookScreen = () => {
  const [selectedRow, setSelectedRow] = useState(-1);
  const [searchText, setSearchText] = useState('');

  const filteredData = book.filter(
    item =>
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.author.toLowerCase().includes(searchText.toLowerCase())
  );
  const tableData = filteredData.map(item => [item.name, item.author]);

  const tableRows = tableData.map((rowData, index) => {
    const isOddRow = index % 2 === 0;
    const rowStyle = isOddRow ? styles.tableRowOdd : styles.tableRowEven;

    return (
      <TouchableOpacity key={index} onPress={() => setSelectedRow(index)}>
        <Row data={rowData} style={rowStyle} textStyle={styles.tableText} />
      </TouchableOpacity>
    );
  });

  const rowFunction = index => {
    alert(`You clicked row ${index + 1}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      <ScrollView>
        <Table borderStyle={styles.tableBorder}>
          <Row
            data={['Name', 'Author']}
            style={styles.tableHeader}
            textStyle={styles.tableHeaderText}
          />
          {tableRows}
        </Table>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  tableHeader: {
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  tableHeaderText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRowOdd: {
    height: 50,
    backgroundColor: '#f2f2f2',
  },
  tableRowEven: {
    height: 50,
    backgroundColor: '#ffffff',
  },
  tableText: {
    textAlign: 'center',
    fontWeight: '400',
    color:'black'
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default BasicBookScreen;
