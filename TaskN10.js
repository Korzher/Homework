let sum = 0;

let user = {
  name: "Vasya",
  friends: 5,
  likes: 9,
  projects: 7,

  accum() {
    for (let key in this) {
      if (typeof this[key] === "number") {
        sum += this[key];
      }
    }
    console.log(sum);
    return sum;
  },

  array() {
    let moddedObj = {};
    let result = [];

    for (let key in this) {
      if (typeof this[key] === "number") {
        moddedObj[key] = this[key];
      }
    }

    moddedObj = Object.fromEntries(
      Object.entries(moddedObj).map(([key, value]) => [value, key])
    );

    for (let key in moddedObj) {
      result.push(moddedObj[key]);
    }

    result.reverse();
    console.log(result);
    return result;
  },
};

user.accum(); //  21
user.array(); //  [ 'likes', 'projects', 'friends' ]
