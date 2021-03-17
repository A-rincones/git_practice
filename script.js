let verb = ['run', 'jump', 'dodge', 'swim', 'talk', 'dance'];
let subj = ['dog', 'cat', 'friend', 'sister', 'partner']
let reason = ['money', 'love', 'fun', 'the record', 'a pepsi']
const randomVerb = verb[Math.floor(Math.random() * verb.length)];
const randomSubj = subj[Math.floor(Math.random() * subj.length)];
const randomReason = reason[Math.floor(Math.random() * reason.length)];

const mixedMessages =() => {
console.log(`You should` + ` ` + randomVerb  + ` with  a ` + randomSubj + ` for ` + randomReason)
};

mixedMessages()
//console.log(`You should` + randomVerb())