

1. Avoid magic numbers.

Do not do things like, 

```
a.length < 8 ? b = `hello` : b = `not hello`
```

The developer who comes after you will have no idea what 8 represents. 

Instead, do this 

```
CONST MAX_LENGTH = 8
a.length < MAX_LENGTH ? b = `hello` : b = `not hello`
```

2. Avoid additional context

Don't
```
const animal = {
    animalName: 'Dog',
    animalAge: 3,
    animalColor: 'brown'
}
```

Do
```
const animal = {
    name: 'Dog',
    age: 3,
    color: 'brown'
}

```
These properties are anyway going to be referenced like `animal.name`, so `animal.name` is more concise and optimal
than `animal.animalName`.

3. Use default arguments instead of short circuiting, using the `||` operator.

Don't
```
const calculate = ( time ) => {
    const newTime = time || 5000
}
```

Do
```
const calculate = ( time = 5000 ) => {
    const newTime = time
}

```

How does this help? Not only is it cleaner and more intuitive to use default arguments, if you want to pass a 0 in the above case,
doing it by the first method will set `newTime` to 5000, because `0 || anything` is anything. This won't be an issue if done using the latter method.

4. Do not pass more than 3 arguments to a function.


If there are more than 3, use an options object(array) to pass the rest of the arguments. This is the way it is implemented in many
libraries like [React Notifications Component](https://www.npmjs.com/package/react-notifications-component)

```
store.addNotification({
  title: "Wonderful!",
  message: "teodosii@react-notifications-component",
  type: "success",
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true
  }
});


store.addNotification(options)
```

5. Single responsibility principle applies to functions too - any function should do only one thing.

Don't
```
const checkUserStatus = (users) => {
    const user = user[0]
    const check = User.check(subscription)
    if (!check)
        User.subscribe(user)
    createNotification('User has been updated')
    users.forEach(user => {
        // code to update UI
    })
}
```

Do

```
const checkUserStatus = ( user ) => {
    const check = User.check(subscription)
    return check
}

// Another function here to do something based on the check 
const updateUIBasedOnStatus = ( users ) => {
    users.forEach(user => {
        const check = checkUserStatus(user)
        if(!check)
            // Whatever
    })
}

```