import "./styles.css";
import React, { useEffect, useState } from "react";
import { gql, useQuery, useLazyQuery } from '@apollo/client'

const allPosts = gql`
  query ($page: Int){
    posts(page: $page, limit: 10){
      id
      user {
        id
      }
      title
      text
      date
      points
      image
      comments {
        text
      }
    }
  }
`

const allUsers = gql`
  query users {
  users{
    id
    firstname
  }
}
`

const App = () => {
  const [newsItems, setItems] = useState([]);
  const [isLoadingPage, setIsLoadingPage] = useState(false);
  const [page, setPage] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [filter, setFilter] = useState(null);

  const [queryPage, { data: allPostsData }] = useLazyQuery(allPosts)
  const { data: allUsersData } = useQuery(allUsers)

  useEffect(() => {
    queryPage({
      variables: {
        page
      }
    })
  }, [page, queryPage])

  const adjustItems = () => {
    console.log("adjusting items");
    const elements = document.querySelectorAll(".item-container");
    elements.forEach(element => {
      const item = element.querySelector(".item");
      console.log(element.style.height);
      element.style.height = item.clientHeight + "px";
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", adjustItems);
    return window.removeEventListener("scroll", adjustItems);
  });

  useEffect(adjustItems);

  useEffect(() => {
    if (isLoadingPage) return;
    if (allPostsData && allUsersData) {
      allUsersData.users.forEach(user => {
        allPostsData.posts.forEach(post => {
          if (post.user.id === user.id) {
            setItems(c => [...c, {
              title: post.title,
              url: `/${post.date}/${post.title}`,
              user: user.firstname,
              comments_count: post.comments.length,
              points: post.points
            }])
          }
        })
      })
    }
  }, [allPostsData, allUsersData, isLoadingPage]);

  useEffect(() => {
    const onScroll = e => {
      const el = document.querySelector(".news-item");
      const prev = el.getAttribute("data-prev-scroll") || 0;
      if (prev > window.pageYOffset) return;
      if (window.innerHeight + window.pageYOffset > el.clientHeight - 400) {
        el.setAttribute("data-prev-scroll", window.pageYOffset);
        if (!isLoadingPage) {
          console.log("loading page");
          setPage(page => page + 1);
          setIsLoadingPage(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [isLoadingPage]);

  let Items = [];
  const filterMap = {
    s(n) {
      return n < 10;
    },
    m(n) {
      return n < 100;
    },
    l(n) {
      return n >= 100;
    }
  };

  for (var i = 0; i < newsItems.length; i++) {
    const item = newsItems[i];
    const className =
      item.id === hovered ? "item-container highlighted" : "item-container";
    if (filterMap[filter] && !filterMap[filter](item.points)) continue;
    Items.push(
      <div
        onClick={e => window.location = item.url}
        className={className}
        onMouseEnter={e => setHovered(item.id)}
        onMouseLeave={e => setHovered(null)}
      >
        <div className="points">
          <span className="orange">{item.points}</span>
        </div>
        <div className="item">
          <div className="title">{item.title}</div>
          <div>
            by <span className="bold">{item.user}</span>
          </div>
          <div>{item.comments_count} comments</div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div id="main-title">My personal blog</div>
      <div className="filter">
        filter by points:
        <button onClick={() => setFilter("s")}>{"< 10"}</button>
        <button onClick={() => setFilter("m")}>{"< 100"}</button>
        <button onClick={() => setFilter("l")}>{"> 100"}</button>
        <button onClick={() => setFilter(null)}>all</button>
      </div>
      <div className="news-item">{Items}</div>
    </div>
  );
}

export default App;
