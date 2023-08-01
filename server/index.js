// const express = require('express');
// const path = require('path');
// const fs = require('fs');
// const { getPostById, getOGdata } = require('./stub/posts.js');
// const app = express();
// const { default: axios } = require('axios');

// const PORT = process.env.PORT || 3000;
// const indexPath = path.resolve(__dirname, '..', 'build', 'index.html'); // this target the index.html in public folder

// app.use(
//   express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
// ); //express.static(root, [options]);  root is the static file , in our case build file
// app.get('/*', async (req, res, next) => {
//   fs.readFile(indexPath, 'utf8', (err, htmlData) => {
//     if (err) {
//       console.error('Error during file reading', err);
//       return res.status(404).end();
//     }
//     // get post info
//     // const postId = req.query.id;
//     const postId = req.url;
//     console.log(' req.url', postId);

//     // const post = getPostById(postId);
//     // const post = getPostById(postId);
//     // const post = getOGdata();
//     // console.log('post', post);
//     // if (!post) return res.status(404).send('Post not found');
//     let tempAllTable = [];
//     let AllTabel = [];
//     axios
//       .get(
//         'http://demo.api.luxuryjewelrynetwork.com/ProductRESTService.svc/ogdetails'
//       )
//       .then((e) => {
//         for (let i = 1; i <= Object.keys(e.data.data).length; i++) {
//           e.data.data[`Table${i}`]?.map((e) => {
//             const { id, event_title, event_description, event_image } = e;
//             return tempAllTable.push({
//               event_route: id,
//               title: event_title,
//               description: event_description,
//               thumbnail: event_image,
//             });
//           });
//         }
//         AllTabel = tempAllTable.concat(e.data.data.Table);
//         // console.log('AllTabel', AllTabel);
//         AllTabel.map((val, i) => {
//           console.log(postId, val.event_route);
//           if (postId.includes(val.event_route)) {
//             setTimeout(() => {
//               console.log('AllTabel[i]', AllTabel[i]);
//               htmlData = htmlData
//                 .replace(
//                   '<title>React App</title>',
//                   `<title>${AllTabel[i].title}</title>`
//                 )
//                 .replace('__META_OG_TITLE__', AllTabel[i].title)
//                 .replace('__META_OG_DESCRIPTION__', AllTabel[i].description)
//                 .replace('__META_DESCRIPTION__', AllTabel[i].description)
//                 .replace('__META_OG_IMAGE__', AllTabel[i].thumbnail);
//               // console.log('htmlData', htmlData);
//               return res.send(htmlData);
//             }, 100);
//           }
//         });

//         // console.log('pramod  ', tempAllTable.concat(e.data.data.Table));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     // inject meta tags
//   });
// });
// // listening...
// app.listen(PORT, (error) => {
//   if (error) {
//     return console.log('Error during app startup', error);
//   }
//   console.log('listening on ' + PORT + '...');
// });

import express from 'express';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import axios from 'axios';

const require = createRequire(import.meta.url);
const app = express();

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const indexPath = path.resolve(__dirname, '..', 'build', 'index.html');

app.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' })
);

app.get('/*', async (req, res, next) => {
  fs.readFile(indexPath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error during file reading', err);
      return res.status(404).end();
    }
    const postId = req.url;

    let tempAllTable = [];
    let AllTabel = [];

    axios
      .get(
        'http://demo.api.luxuryjewelrynetwork.com/ProductRESTService.svc/ogdetails'
      )
      .then((e) => {
        for (let i = 1; i <= Object.keys(e.data.data).length; i++) {
          e.data.data[`Table${i}`]?.map((e) => {
            const { id, event_title, event_description, event_image } = e;
            return tempAllTable.push({
              event_route: id,
              title: event_title,
              description: event_description,
              thumbnail: event_image,
            });
          });
        }
        AllTabel = tempAllTable.concat(e.data.data.Table);

        AllTabel.map((val, i) => {
          if (postId.includes(val.event_route)) {
            console.log('AllTabel[i]', AllTabel[i]);
            setTimeout(() => {
              htmlData = htmlData
                .replace(
                  '<title>React App</title>',
                  `<title>${AllTabel[i].title}</title>`
                )
                .replace('__META_OG_TITLE__', AllTabel[i].title)
                .replace('__META_OG_DESCRIPTION__', AllTabel[i].descr)
                .replace('__META_DESCRIPTION__', AllTabel[i].descr)
                .replace('__META_OG_IMAGE__', AllTabel[i].imgurl);
              return res.send(htmlData);
            }, 100);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log('Error during app startup', error);
  }
  console.log('listening on ' + PORT + '...');
});
