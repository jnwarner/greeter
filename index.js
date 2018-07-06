'use strict';

const tokens = require('./tokens.json');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Weady to sewve daddy uwu');
    client.user.setActivity('for Degenerates', {type: 'WATCHING'});
});

client.on('guildMemberAdd', (member) => {
    console.log('member left', member.user);
    member.addRole('464654854531579904')
        .then(member => {
            member.send('**OwO**\nWewcome to Chwistian Fuwwies Onwy >w<  Pwease wemembew to wead the wuwes. :heart:')
        })
        .catch(console.error());
});

client.on('guildMemberRemove', (member) => {
    console.log('member left', member.user);
});

client.login(tokens.client_token);