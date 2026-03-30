function download() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Downloading");
      resolve("Downloading");
    }, 3000);
  });
}

function verify() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Verifying file...");
      resolve("Verifying file...");
    }, 2000);
  });
}

function notify() {
  console.log("Download complete!");
}

// consuming feedback promise
// download()
//     .then((result) => {
//         console.log(result);
//         return verify();
//     })
//     .then((result) => {
//         console.log(result);
//         notify();
//     })
//     .catch((error) => {
//         console.error(error);
//     })

// function main() {
//   download()
//   verify()
//   notify()
// }

// consuming feedback promise with async/await
const main = async () => {
    console.log(await download());
    console.log(await verify());
    notify();
}

main();
