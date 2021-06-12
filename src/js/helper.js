import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const fetchPromise = uploadData
      ? fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(uploadData),
        })
      : fetch(url);

    const response = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);

    const data = await response.json();

    if (!response.ok) throw new Error(`${data.message} ${response.status}`);
    return data;
  } catch (error) {
    throw error;
  }
};

// export const getJSON = async function (url) {
//   try {
//     const fetchPromise = fetch(url);

//     const response = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);

//     const data = await response.json();

//     if (!response.ok) throw new Error(`${data.message} ${response.status}`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const sendJSON = async function (url, uploadData) {
//   try {
//     const fetchPromise = fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(uploadData),
//     });

//     const response = await Promise.race([fetchPromise, timeout(TIMEOUT_SEC)]);

//     const data = await response.json();

//     if (!response.ok) throw new Error(`${data.message} ${response.status}`);
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };
