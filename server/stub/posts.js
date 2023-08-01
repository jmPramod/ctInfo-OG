// const { default: axios } = require('axios');
// let tempAllTable = [];
// let AllTabel = [];
// axios
//   .get(
//     'http://demo.api.luxuryjewelrynetwork.com/ProductRESTService.svc/ogdetails'
//   )
//   .then((e) => {
//     for (let i = 1; i <= Object.keys(e.data.data).length; i++) {
//       e.data.data[`Table${i}`]?.map((e) => {
//         const { id, event_title, event_description, event_image } = e;
//         return tempAllTable.push({
//           event_route: id,
//           title: event_title,
//           description: event_description,
//           thumbnail: event_image,
//         });
//       });
//     }
//     AllTabel = tempAllTable.concat(e.data.data.Table);
//     // console.log('pramod  ', tempAllTable.concat(e.data.data.Table));
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const posts = [
//   {
//     title: 'Post #1',
//     description: 'This is the first post',
//     thumbnail:
//       'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
//   },
//   {
//     title: 'Post #2',
//     description: 'This is the second post',
//     thumbnail:
//       'https://images.unsplash.com/photo-1625034712314-7bd692b60ecb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//   },
//   {
//     title: 'Post #3',
//     description: 'This is the third post',
//     thumbnail:
//       'https://images.unsplash.com/photo-1625034892070-6a3cc12edb42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80',
//   },
// ];
// // module.exports.getPostById = (id) => {
// //   //   console.log('id', id);
// //   //   console.log('posts[id - 1]', posts[id - 1]);
// //   return posts[id - 1];
// // };
// module.exports.getOGdata = (url) => {
//   console.log('url  ', url);
//   AllTabel.map((val, i) => {
//     console.log(val.event_route);
//     if (url.includes(val.event_route)) {
//       console.log('AllTabel[i]', AllTabel[i]);
//       return AllTabel[i];
//     }
//   });
// };
