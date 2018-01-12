import React, { Component } from 'react';

const hostUrl = "http://localhost:8080/";

const CONFIG = {
    getAllDetails: hostUrl+ "match",
    getTeams: hostUrl+ "teams",
    getPlayers: hostUrl+ "players",
}

export default CONFIG;