'use client'
import React, { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from './config';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Table() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersRef = ref(db); // Ensure this matches the path in your Firebase database
        const unsubscribe = onValue(usersRef, (snapshot) => {
            if (snapshot.exists()) {
                const usersArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id,
                    ...data,
                }));
                setUsers(usersArray);
            } else {
                console.log('No data available');
            }
        });

        // Cleanup the listener on unmount
        return () => unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.table}>
                {/* Header Row */}
                <View style={[styles.row, styles.headerRow]}>
                    <Text style={[styles.cell, styles.headerCell]}>Count</Text>
                    <Text style={[styles.cell, styles.headerCell]}>Variety</Text>
                    <Text style={[styles.cell, styles.headerCell]}>Ripeness</Text>
                    <Text style={[styles.cell, styles.headerCell]}>Date and Time</Text>
                </View>
            </View>
            <ScrollView style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.table}>
                    {/* Data Rows */}
                    {users.map((user, index) => (
                        <View key={user.id} style={styles.row}>
                            <Text style={styles.cell}>{index + 1}</Text>
                            <Text style={styles.cell}>{user.variety}</Text>
                            <Text style={styles.cell}>{user.ripeness}</Text>
                            <Text style={styles.cell}>{user.dateAndtime}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6FF94',
        height: 700,
        borderColor:'#40A578',
        borderWidth: 5,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    scrollView: {
        width: '100%',
        height: 25,
    },
    table: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'transparent',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        backgroundColor: '#9DDE8B',
    },
    headerRow: {
        backgroundColor: '#40A578',
    },
    cell: {
        flex: 1,
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        borderBottomColor: '#9DDE8B',
    },
    headerCell: {
        fontWeight: 'bold',
    },
});
