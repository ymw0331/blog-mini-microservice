import React, { useState, useEffect } from 'react';
import axios from 'axios';

axios.post('http://localhost:4000/events', event).catch((err) => {
  console.log(err.message);
});
axios.post('http://localhost:4001/events', event).catch((err) => {
  console.log(err.message);
});
axios.post('http://localhost:4002/events', event).catch((err) => {
  console.log(err.message);
});
res.send({ status: 'OK' });