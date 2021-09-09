import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import Navbar from '../../components/Navbar/Navbar';
import Location from './Location';
import Customers from './Customers';
import NailTech from './NailTech';
import AppointmentDates from './AppointmentDates';
import AppointmentTimes from './AppointmentTimes';
import Services from './Services';
import Upload from './Upload';
import PrimaryBtn from '../../components/Buttons/PrimaryBtn';

import generalStyles from '../../styles/general';

const Booking = () => {

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={generalStyles.contentContainer}>
        <Navbar title="Booking Details" />
        <Location />
        <Customers />
        <NailTech />
        <AppointmentDates />
        <AppointmentTimes />
        <Services />
        <Upload />
        <PrimaryBtn title="Book Now"/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Booking