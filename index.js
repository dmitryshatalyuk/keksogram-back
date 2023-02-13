const http = require("http");
const fs = require("fs");

const commentsArr = [
  "Wow, this post is amazing!",
  "I love this!",
  "So beautiful!",
  "Can't wait to see more!",
  "Incredible!",
  "Awesome!",
  "I'm blown away!",
  "This is the best thing I've seen all day!",
  "Perfect!",
  "Love this!",
  "You're so talented!",
  "Amazing work!",
  "Stunning!",
  "I'm in awe!",
  "This is amazing!",
  "This is so cool!",
  "I love it!",
  "Fantastic!",
  "Awesome work!",
  "You have a great eye!",
  "This is fantastic!",
  "I'm a big fan!",
  "I can't stop looking at this!",
  "Amazing!",
  "Beautiful!",
  "I'm loving this!",
  "This is incredible!",
  "This is so beautiful!",
  "I'm speechless!",
  "I love your work!",
  "This is amazing!",
  "You're a true artist!",
  "I'm impressed!",
  "This is gorgeous!",
  "I'm in love!",
  "This is amazing!",
  "You're so talented!",
  "I can't get enough!",
  "Awesome!",
  "This is fantastic!",
  "I'm obsessed!",
  "Amazing work!",
  "Stunning!",
  "I'm a big fan!",
  "You have a great eye!",
  "This is amazing!",
  "This is so cool!",
  "I love it!",
  "Fantastic!",
  "Awesome work!",
  "I'm blown away!",
  "This is the best thing I've seen all day!",
  "Perfect!",
  "Love this!",
  "You're so talented!",
  "Amazing!",
  "Beautiful!",
  "I'm loving this!",
  "This is incredible!",
  "This is so beautiful!",
  "I'm speechless!",
  "I love your work!",
  "This is amazing!",
  "You're a true artist!",
  "I'm impressed!",
  "This is gorgeous!",
  "I'm in love!",
  "This is amazing!",
  "You're so talented!",
  "I can't get enough!",
  "Awesome!",
  "This is fantastic!",
  "I'm obsessed!",
  "Amazing work!",
  "Stunning!",
  "I'm a big fan!",
  "You have a great eye!",
  "This is amazing!",
  "This is so cool!",
  "I love it!",
  "Fantastic!",
  "Awesome work!",
  "I'm blown away!",
];

const names = [
  "Rhett Wheat",
  "Madisen Goad",
  "Clint Russ",
  "Jakayla Fournier",
  "Britany Yoo",
  "Tina Mathews",
  "Antoine Webb",
  "Leia Hunter",
];

const descriptions = [
  "A beautiful sunset over the ocean.",
  "A scenic hike through the mountains.",
  "A cute puppy playing in the park.",
  "A city skyline at night.",
  "A colorful flower garden.",
  "A waterfall in the forest.",
  "A family having a picnic in the park.",
  "A bird's eye view of the city.",
  "A group of friends at a concert.",
  "A snow-covered winter wonderland.",
  "A stunning beach with crystal clear water.",
  "A close-up of a beautiful butterfly.",
  "A hot air balloon ride over the countryside.",
  "A night sky filled with stars.",
  "A group of people having a barbecue in the park.",
];

function getRandomNum(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

const photos = new Array(25).fill(null).map((e, index) => {
  return {
    id: index + 1,
    title: `Photo-${index + 1}`,
    description: descriptions[getRandomNum(0, descriptions.length - 1)],
    url: `https://picsum.photos/id/${index + 20}/600/600`,
    likes: getRandomNum(25, 225),
  };
});

const comments = new Array(100).fill(null).map((e, index) => {
  return {
    id: index + 1,
    avatar: `https://picsum.photos/id/${getRandomNum(100, 200)}/128/128`,
    message: commentsArr[getRandomNum(0, commentsArr.length - 1)],
    name: names[getRandomNum(0, names.length - 1)],
  };
});

fs.writeFileSync("photos.txt", JSON.stringify(photos));
fs.writeFileSync("comments.txt", JSON.stringify(comments));

const server = http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.writeHead(200, { "Content-Type": "application/json" });

    const url = req.url;

    if (res.statusCode !== 200) {
      res.write(`Error getting data. Status code: ${res.statusCode}`);
      res.end();
    } else {
      if (url === "/photos") {
        const photosData = fs.readFileSync("photos.txt");
        res.write(photosData);
        res.end();
      } else if (url === "/comments") {
        const commentsData = fs.readFileSync("comments.txt");
        res.write(commentsData);
        res.end();
      }
    }
  })
  .listen(3000, "127.0.0.1", function () {
    console.log("Server running at 127.0.0.1:3000");
  });
