Feature('Checking leadform Process')

Before((I, login) => {
    login.sendForm(
        'sushan.shrestha+test3@introcept.co',
        'agentcis'
    );
});

 Scenario('User checks the leadform process', (I, login, leadform)=>{
    // leadform.Visit_leadform(login, leadform);
    leadform.lead2prospect(login, leadform);
 });

