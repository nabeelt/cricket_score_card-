import React, { Component } from 'react';

const hostUrl = "http://localhost:3001/";

const CONFIG = {
    getUsers: hostUrl+ "users",
    getLogin: hostUrl+"adminUser"
}

export default CONFIG;