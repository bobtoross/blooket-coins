const readline = require('readline-sync');
const Blooket = require('blooket');

const client = new Blooket();

console.log('You can get a total of 500 Tokens and 300 XP per day.')

gmail = readline.question('What is your email? ');
pass = readline.question('What is your password? THIS IS NOT A HACK. THIS IS TO PUT THE TOKENS AND XP INTO YOUR ACCOUNT! ');

(async () => {
    const login = await client.login(`${gmail}`, `${pass}`);
    const authToken = login.token;

    const account = await client.getAccountData(authToken);
    const name = account.name;

    const tokenAmount = 500;
    const xpAmount = 300;

    const addTokens = await client.addTokens(tokenAmount, xpAmount, name, authToken);

    console.log(addTokens);
    console.log('Added ' + tokenAmount + ' tokens and ' + xpAmount + ' XP to your account.');
})();
