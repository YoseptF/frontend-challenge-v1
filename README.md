# Frontend Challenge
## Challenge

- Open App.js. There are some very questionable decisions killing the performance. Let's work on them!
- This project uses typescript 4, but App is a js file. Convert it to typescript.
- Create a page to see the content of each blog post. with the following structure:
  - blog image
  - title
  - user & number of comments
  - blog text
  - comments
- Extra: write a unit test for the code you just added

---
## Data
<div id="data"></div>

This repo takes data from : https://fakeql.com/fragilegraphql/a465ba1570e77c30af480d11e529007e

### Fragile data

Data is set to fragile. The fragile API is a throttled endpoint that has random response delays between 0 and 1000 milliseconds and once in a while (1 in 10 chance) is completely unavailable (http error 503).

### Data origin

```
{
  "posts": [
        { "id": 1, "user_id": 1,"points": 1, "title": "A day on the beach", "text":"{{fake.lorem.paragraphs}}", "date": "2018-01-01", "image": "https://picsum.photos/1200/800?random={{fake.random.number}}" },
        { "id": 24, "user_id": 10,"points": 2, "title": "Coding for joy", "text":"{{fake.lorem.paragraphs}}", "date": "2018-12-24", "image": "https://picsum.photos/1200/800?random={{fake.random.number}}" },
        { "id": 25, "user_id": 9,"points": 100, "title": "On the road", "text":"{{fake.lorem.paragraphs}}", "date": "2018-12-25", "image": "https://picsum.photos/1200/800?random={{fake.random.number}}" }
    ],
    "users": [
        { "id": 1, "firstname": "Mike", "age": 12 },
        { "id": 10, "firstname": "Lucy", "age": 31 }
    ],
    "comments": [
        { "id": 1, "user_id": 1, "post_id": 1, "text": "Some text." },
        { "id": 99, "user_id": 10, "post_id": 25, "text": "Some more text." },
        { "id": 100, "user_id": 9, "post_id": 24, "text": "Bla, bla, bla ..." }
    ]
}
```
---

## Additional information

### Types

You can find a file with all types generated from the graphql schema on `src/generated/types.tsx`

### Playground

You can see the a playground with the docs and schema here: https://lucasconstantino.github.io/graphiql-online/ (then add the endpoint mentioned on [data](#data))

---

### Tech used

- [fakeql](https://fakeql.com/)
- [Blowson](https://github.com/FrediBach/Blowson)
- [apolloCLient](https://www.apollographql.com/docs/react/)
- [codegen](https://www.graphql-code-generator.com)