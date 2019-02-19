Feature('Checking SignUp Process')

// Before((I, login) => {
//     login.sendForm(
//         'sushan.shrestha+test4@introcept.co',
//         'agentcis'
//     );
// });

 Scenario('User checks the Signup process', (I, loop, signupage)=>{
    signupage.LiveSignUP(loop);
 });

