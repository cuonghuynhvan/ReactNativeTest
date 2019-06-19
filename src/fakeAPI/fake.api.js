import { AsyncStorage } from 'react-native';

const storeUser = async (user) => {
  try {
    const lowercaseUsername = user.username.toLowerCase();
    await AsyncStorage.setItem(lowercaseUsername, JSON.stringify(user));
  } catch (error) {
    // Error saving data
  }
};

const loadUser = async (username) => {
  try {
    const lowercaseUsername = username.toLowerCase();
    const userJSON = await AsyncStorage.getItem(lowercaseUsername);
    return userJSON ? JSON.parse(userJSON) : {};
  } catch (error) {
    // Error saving data
  }

  return {};
};

const register = (user) =>
  new Promise((resolve, reject) => {
    loadUser(user.username).then((existedUser) => {
      if (existedUser.username) {
        reject({
          username: 'Your username is already taken'
        });

        return;
      }

      storeUser(user);
      resolve(user);
    });
  });

const login = ({ username, password }) =>
  new Promise((resolve, reject) => {
    loadUser(username).then((existedUser) => {
      if (!existedUser.username || existedUser.password !== password) {
        reject('Wrong username / password');
        return;
      }

      resolve(existedUser);
    });
  });

export { register, login };
