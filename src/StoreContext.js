// Init
import React, { useContext, useState, createContext } from 'react';

// Initializing Create Context Hook
const storeContext = createContext();
const storeUpdateContext = createContext();

// We are also initializing useContexts here then we only call these functions where we need that data
export function Store() {
  return useContext(storeContext);
}

export function UpdateStore() {
  return useContext(storeUpdateContext);
}

// Initializing Store Provider
export function StoreProvider({ children }) {
  // Initializing State
  const [store, setStore] = useState({
    loggedIn: false,
    user: {},
    your_are: '',
    your_areE: '',
    journey_type: [],
    journey_typeE: [],
    journey_frequency: '',
    journey_frequencyE: '',
    days: [],
    daysE: [],
    door_support: '',
    door_supportS: '',
    total_children: '',
    total_children_tb: '',
    total_adults: '',
    total_adults_tb: '',
    baby: '',
    babyTb: '',
    pickUp_date: '',
    pickUp_time: '',
    return_date: '',
    return_time: '',
    pickUp_address: {
      label: '',
      label2: '',
      postal_code: '',
      lat: '',
      lng: '',
      city: '',
    },
    destination_address: {
      label: '',
      label2: '',
      postal_code: '',
      lat: '',
      lng: '',
      city: '',
    },
    return_address: {
      label: '',
      label2: '',
      postal_code: '',
      lat: '',
      lng: '',
      city: '',
    },
    first_name: '', // First name
    last_name: '', //last_name/company name optional
    email: '', //E-mail
    phone: '', // phone
    message: '', //last_name/company name optional optional
    captchaToken: '',
  });

  const updateStore = (data) => {
    setStore((prev) => {
      return {
        ...prev,
        ...data,
      };
    });
  };

  // Render
  return (
    <storeContext.Provider value={store}>
      <storeUpdateContext.Provider value={updateStore}>{children}</storeUpdateContext.Provider>
    </storeContext.Provider>
  );
}
