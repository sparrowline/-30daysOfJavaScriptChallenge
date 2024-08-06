//Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promise1.then((message) => {
  console.log(message);
});

//   Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch()
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject("Promise rejected after 2 seconds");
  }, 2000);
});

promise2.catch((error) => {
  console.error(error);
});

//   Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetchData = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

fetchData("Fetching data...")
  .then((message) => {
    console.log(message);
    return fetchData("Processing data...");
  })
  .then((message) => {
    console.log(message);
    return fetchData("Data processed");
  })
  .then((message) => {
    console.log(message);
  });

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const resolvePromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 2000);
  });
};

const asyncFunction = async () => {
  const result = await resolvePromise();
  console.log(result);
};

asyncFunction();

//   Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const rejectPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Promise rejected");
    }, 2000);
  });
};

const asyncFunctionWithErrorHandling = async () => {
  try {
    const result = await rejectPromise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

asyncFunctionWithErrorHandling();

//   Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using a promise.
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

//   Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchDataAsync = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchDataAsync();

//   Activity 5: Concurrent Promises
// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promiseA = Promise.resolve("Promise A");
const promiseB = Promise.resolve("Promise B");
const promiseC = Promise.resolve("Promise C");

Promise.all([promiseA, promiseB, promiseC]).then((values) => {
  console.log(values);
});

//   Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promiseX = new Promise((resolve) =>
  setTimeout(() => resolve("Promise X"), 1000)
);
const promiseY = new Promise((resolve) =>
  setTimeout(() => resolve("Promise Y"), 2000)
);
const promiseZ = new Promise((resolve) =>
  setTimeout(() => resolve("Promise Z"), 3000)
);

Promise.race([promiseX, promiseY, promiseZ]).then((value) => {
  console.log(value);
});

//   Feature Requests
// 1. Promise Creation Script: Write a script that demonstrates creating and handling promises, including both resolved and rejected states.
const createPromise = (shouldResolve) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve("Promise resolved");
      } else {
        reject("Promise rejected");
      }
    }, 2000);
  });
};

createPromise(true)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

createPromise(false)
  .then((message) => console.log(message))
  .catch((error) => console.error(error));

// 2. Promise Chaining Script: Create a script that chains multiple promises and logs messages in a specific sequence.

const chainPromises = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("First promise resolved"), 1000);
  })
    .then((message) => {
      console.log(message);
      return new Promise((resolve) => {
        setTimeout(() => resolve("Second promise resolved"), 1000);
      });
    })
    .then((message) => {
      console.log(message);
      return new Promise((resolve) => {
        setTimeout(() => resolve("Third promise resolved"), 1000);
      });
    })
    .then((message) => {
      console.log(message);
    });
};

chainPromises();

//   3. Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.

const asyncAwaitDemo = async (shouldResolve) => {
  const createAsyncPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve("Async/Await Promise resolved");
        } else {
          reject("Async/Await Promise rejected");
        }
      }, 2000);
    });
  };

  try {
    const result = await createAsyncPromise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

asyncAwaitDemo(true);
asyncAwaitDemo(false);

//   4. API Fetch Script: Create a script that fetches data from a public API using both promises and async/await, and logs the response data.

// Using Promises
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log("Using Promises:", data))
  .catch((error) => console.error("Error:", error));

// Using Async/Await
const fetchDataUsingAsyncAwait = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log("Using Async/Await:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchDataUsingAsyncAwait();

// 5. Concurrent Promises Script: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results.
// Promise.all
const promiseOne = new Promise((resolve) =>
  setTimeout(() => resolve("Promise One"), 1000)
);
const promiseTwo = new Promise((resolve) =>
  setTimeout(() => resolve("Promise Two"), 2000)
);
const promiseThree = new Promise((resolve) =>
  setTimeout(() => resolve("Promise Three"), 3000)
);

Promise.all([promiseOne, promiseTwo, promiseThree]).then((values) => {
  console.log("Promise.all:", values);
});

// Promise.race
Promise.race([promiseOne, promiseTwo, promiseThree]).then((value) => {
  console.log("Promise.race:", value);
});
