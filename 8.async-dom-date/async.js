//1. create a Promise:

const prms = (arg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                if (arg) {
                    resolve("success with " + arg);
                } else {
                    throw new Error("error with " + arg);
                }
            } catch (err) {
                reject(err);
            }
        }, 1000);
    })
        .then((resposne) => console.log(resposne))
        .catch((err) => console.log(err.message))
        .finally(() => console.log("Finally block executed"));

//2. Check if a value is a promise:

const isPromise = (val) => val instanceof Promise;

console.log(isPromise(prms("test")), isPromise(prms(null)));

//3. create async func:

const myAsyncFunc1 = async () => {
    try {
        const res = await Promise.resolve("test async function with resolve");
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};

const myAsyncFunc2 = async () => {
    try {
        const result = await Promise.reject("test async function with reject");
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

console.log(isPromise(myAsyncFunc1()), isPromise(myAsyncFunc2()));
