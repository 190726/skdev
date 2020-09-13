//callback hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (id === 'ellie') {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error('no success'));
            }
        }, 2000);
    }
}

const userStorage = new UserStorage();
const id = 'ellie';
const password = '1111';
userStorage.loginUser(
    id, 
    password,
    (user) => {
        userStorage.getRoles(
            user,
            userWithRole=>{
                console.log(`name:${userWithRole.name}, role:${userWithRole.role}`);
            },
            error=>{
                console.log(error)}
        )
    },
    error =>{
        console.log(error);      
    }
);