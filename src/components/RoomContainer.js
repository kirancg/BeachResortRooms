import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { RoomConsumer } from '../context';

export default function RoomContainer() {
    return (
        <RoomConsumer>
            {
                value => {
                    const { loading, setRoom, sortedRooms,rooms } = value;
                    return (
                        <div>
                            Hello From Rooms Container
                            <RoomFilter />
                            <RoomList />
                        </div>
                    );
                }
            }
        </RoomConsumer>
       
    )
}