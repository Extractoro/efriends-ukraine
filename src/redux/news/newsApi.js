import { Notify } from "notiflix";

export const fetchAll = async () => {
  try {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "language=en&" +
      "apiKey=25c8db04e653406ea67028d4b9df191b&" +
      "category=general&" +
      "pageSize=21";

    var req = new Request(url);

    const res = (await fetch(req)).json();

    return res;
  } catch (error) {
    Notify.failure("Oops!");
  }
};

export const fetchEntertainment = async () => {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "language=en&" +
    "apiKey=25c8db04e653406ea67028d4b9df191b&" +
    "category=entertainment&" +
    "pageSize=21";

  var req = new Request(url);

  const res = (await fetch(req)).json();

  return res;
};

export const fetchHealth = async () => {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "language=en&" +
    "apiKey=25c8db04e653406ea67028d4b9df191b&" +
    "category=health&" +
    "pageSize=21";

  var req = new Request(url);

  const res = (await fetch(req)).json();

  return res;
};

export const fetchSports = async () => {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "language=en&" +
    "apiKey=25c8db04e653406ea67028d4b9df191b&" +
    "category=sports&" +
    "pageSize=21";

  var req = new Request(url);

  const res = (await fetch(req)).json();

  return res;
};

export const fetchScience = async () => {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "language=en&" +
    "apiKey=25c8db04e653406ea67028d4b9df191b&" +
    "category=science&" +
    "pageSize=21";

  var req = new Request(url);

  const res = (await fetch(req)).json();

  return res;
};

export const fetchBusiness = async () => {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "language=en&" +
    "apiKey=25c8db04e653406ea67028d4b9df191b&" +
    "category=business&" +
    "pageSize=21";

  var req = new Request(url);

  const res = (await fetch(req)).json();

  return res;
};

export const fetchTechnology = async () => {
  var url =
    "https://newsapi.org/v2/top-headlines?" +
    "language=en&" +
    "apiKey=25c8db04e653406ea67028d4b9df191b&" +
    "category=technology&" +
    "pageSize=21";

  var req = new Request(url);

  const res = (await fetch(req)).json();

  return res;
};

// const array = [
//   fetch(
//     "https://newsapi.org/v2/top-headlines?language=en&apiKey=25c8db04e653406ea67028d4b9df191b&category=general"
//   ),
//   fetch(
//     "https://newsapi.org/v2/top-headlines?language=en&apiKey=25c8db04e653406ea67028d4b9df191b&category=technology"
//   ),
//   fetch(
//     "https://newsapi.org/v2/top-headlines?language=en&apiKey=25c8db04e653406ea67028d4b9df191b&category=business"
//   ),
//   fetch(
//     "https://newsapi.org/v2/top-headlines?language=en&apiKey=25c8db04e653406ea67028d4b9df191b&category=sports"
//   ),
//   fetch(
//     "https://newsapi.org/v2/top-headlines?language=en&apiKey=25c8db04e653406ea67028d4b9df191b&category=health"
//   ),
//   fetch(
//     "https://newsapi.org/v2/top-headlines?language=en&apiKey=25c8db04e653406ea67028d4b9df191b&category=entertainment"
//   ),
//   fetch(
//     "https://newsapi.org/v2/top-headlines?language=en&apiKey=25c8db04e653406ea67028d4b9df191b&category=science"
//   ),
// ];

// export const fetches = async () => {
//   try {
//     const res = await Promise.all(array);

//     const successArray = [];

//     res.map((obj) => {
//       if (obj.status === "fulfilled") {
//         successArray.push(obj.value);
//       }
//     });

//     if (successArray.length === 0) {
//       throw new Error("All fetches failed");
//     }

//     const data = await Promise.all(
//       successArray.map((item) => {
//         return item.json();
//       })
//     );

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

// 65f70018918a426aa083c5638ddfcf65
