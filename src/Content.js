import { useEffect, useLayoutEffect, useState, useRef, memo } from "react";

//   1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
//   2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component moundted
//   3. useEffect(callback, [deps]
// - Callback sẽ được gọi lại mỗi khi dependency thay đổi
// - Cleanap function luôn được gọi trước khi component unmoundted

// const tabs = ["posts", "todos", "albums"];
// function Content() {
//   const [title, setTitle] = useState("");
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState("posts");
//   const [showGoToTop, setShowGoToTop] = useState(false);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then((res) => res.json())
//       .then((posts) => {
//         setPosts(posts);
//       });
//   }, [type]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowGoToTop(window.scrollY >= 200);
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup function
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div>
//       {tabs.map((tab) => (
//         <button
//           style={
//             type === tab
//               ? {
//                   color: "#fff",
//                   backgroundColor: "#333",
//                 }
//               : {}
//           }
//           key={tab}
//           onClick={() => setType(tab)}
//         >
//           {tab}
//         </button>
//       ))}
//       <input value={title || ""} onChange={(e) => setTitle(e.target.value)} />
//       <ul>
//         {posts.map((post) => {
//           return <li key={post.id}>{post.title}</li>;
//         })}
//       </ul>
//       {showGoToTop && (
//         <button style={{ position: "fixed", right: 20, bottom: 20 }}>
//           Go to top
//         </button>
//       )}
//     </div>
//   );
// }

// **************************************************************** //

// function Content() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup fuc
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>{width}</h1>
//     </div>
//   );
// }

// **************************************************************** //

// function Content() {
//   const [avatar, setAvatar] = useState();

//   useEffect(() => {
//     // Cleanup
//     return () => {
//       URL.revokeObjectURL(avatar?.preview);
//     };
//   }, [avatar]);

//   const handlePreviewAvatar = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       file.preview = URL.createObjectURL(file);
//       setAvatar(file);
//     }

//     e.target.value = null;
//   };

//   return (
//     <div>
//       <input type="file" onChange={handlePreviewAvatar} />
//       {avatar && <img src={avatar.preview} alt="image" width="80px" />}
//     </div>
//   );
// }

// **************************************************************** //

// const lessons = [
//   {
//     id: 1,
//     name: "ReactJS là gì? Tại sao nên học ReactJS?",
//   },
//   {
//     id: 2,
//     name: "SPA/MPA là gì?",
//   },
//   {
//     id: 3,
//     name: "Arrow function",
//   },
// ];

// function Content() {
//   const [lessonId, setLessonId] = useState(1);

//   useEffect(() => {
//     const handleComment = ({ detail }) => {
//       console.log(detail);
//     };
//     window.addEventListener(`lesson-${lessonId}`, handleComment);

//     return () => {
//       window.removeEventListener(`lesson-${lessonId}`, handleComment);
//     };
//   }, [lessonId]);

//   return (
//     <div>
//       <ul>
//         {lessons.map((lesson) => (
//           <li
//             style={{ color: lessonId === lesson.id ? "red" : "#333" }}
//             key={lesson.id}
//             onClick={() => setLessonId(lesson.id)}
//           >
//             {lesson.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// **************************************************************** //

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật lại DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI

// function Content() {
//   const [count, setCount] = useState(0);

//   useLayoutEffect(() => {
//     if (count > 3) {
//       setCount(0);
//     }
//   }, [count]);

//   const handleRun = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleRun}>Run</button>
//     </div>
//   );
// }

// **************************************************************** //

// function Content() {
//   const [count, setCount] = useState(60);

//   const timerId = useRef();
//   const prevCount = useRef();
//   const h1Ref = useRef();

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   useEffect(() => {
//     const rect = h1Ref.current.getBoundingClientRect();
//     console.log(rect);
//   });

//   const handleStart = () => {
//     timerId.current = setInterval(() => {
//       setCount((prevCount) => prevCount - 1);
//     }, 1000);
//     console.log("Start =>" + timerId.current);
//   };

//   const handleRun = () => {
//     clearInterval(timerId.current);
//     console.log("Stop =>" + timerId.current);
//   };

//   console.log(count, prevCount.current);

//   return (
//     <div>
//       <h1 ref={h1Ref}>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleRun}>Run</button>
//     </div>
//   );
// }

export default Content;
