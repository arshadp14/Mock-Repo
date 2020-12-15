// import React, { useState, useEffect } from "react";
// import DataService from "../services/service";
// import { Link } from "react-router-dom";

// export const ListTutorials = () => {
//   const [tutorials, setTutorials] = useState([]);
//   const [currentTutorial, setCurrentTutorial] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(-1);
//   const [searchTitle, setSearchTitle] = useState("");

//   useEffect(() => {
//     retrieveTutorials();
//   }, []);

//   const onChangeSearchTitle = (e) => {
//     const searchTitle = e.target.value;
//     setSearchTitle(searchTitle);
//   };

//   const retrieveTutorials = () => {
//     DataService.getAll()
//       .then((response) => {
//         setTutorials(response.data);
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   const refreshList = () => {
//     retrieveTutorials();
//     setCurrentTutorial(null);
//     setCurrentIndex(-1);
//   };

//   const setActiveTutorial = (tutorial, index) => {
//     setCurrentTutorial(tutorial);
//     setCurrentIndex(index);
//   };

//   const removeAllTutorials = () => {
//     DataService.removeAll()
//       .then((response) => {
//         console.log(response.data);
//         refreshList();
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   const findByTitle = () => {
//     DataService.findByTitle(searchTitle)
//       .then((response) => {
//         setTutorials(response.data);
//         console.log(response.data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   return (
//     <div className="list row">
//       <div className="col-md-8">
//         <div className="input-group mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search by title"
//             value={searchTitle}
//             onChange={onChangeSearchTitle}
//           />
//           <div className="input-group-append">
//             <button
//               className="btn btn-outline-secondary"
//               type="button"
//               onClick={findByTitle}
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <h4>Tutorials List</h4>

//         <ul className="list-group">
//           {tutorials &&
//             tutorials.map((tutorial, index) => (
//               <li
//                 className={
//                   "list-group-item " + (index === currentIndex ? "active" : "")
//                 }
//                 onClick={() => setActiveTutorial(tutorial, index)}
//                 key={index}
//               >
//                 {tutorial.title}
//               </li>
//             ))}
//         </ul>

//         <button
//           className="m-3 btn btn-sm btn-danger"
//           onClick={removeAllTutorials}
//         >
//           Remove All
//         </button>
//       </div>
//       <div className="col-md-6">
//         {currentTutorial ? (
//           <div>
//             <h4>Tutorial</h4>
//             <div>
//               <label>
//                 <strong>Title:</strong>
//               </label>{" "}
//               {currentTutorial.title}
//             </div>
//             <div>
//               <label>
//                 <strong>Description:</strong>
//               </label>{" "}
//               {currentTutorial.description}
//             </div>
//             <div>
//               <label>
//                 <strong>Status:</strong>
//               </label>{" "}
//               {currentTutorial.published ? "Published" : "Pending"}
//             </div>

//             <Link
//               to={"/tutorials/" + currentTutorial.id}
//               className="badge badge-warning"
//             >
//               Edit
//             </Link>
//           </div>
//         ) : (
//           <div>
//             <br />
//             <p>Please click on a Tutorial...</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ListTutorials;

import React, { useState, useEffect } from "react";
import DataService from "../services/service";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

export const ListNews = () => {
  const [news, setNews] = useState([]);
  const [currentNews, setCurrentNews] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  //   const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveNews();
  }, []);

  //   const onChangeSearchTitle = (e) => {
  //     const searchTitle = e.target.value;
  //     setSearchTitle(searchTitle);
  //   };

  const retrieveNews = () => {
    DataService.findAllNewsByCity()
      .then((response) => {
        setNews(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //   const refreshList = () => {
  //     retrieveNews();
  //     setCurrentNews(null);
  //     setCurrentIndex(-1);
  //   };

  const setActiveNews = (news, index) => {
    setCurrentNews(news);
    setCurrentIndex(index);
  };

  //   const removeAllNews = () => {
  //     DataService.removeAll()
  //       .then((response) => {
  //         console.log(response.data);
  //         refreshList();
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

  //   const findByTitle = () => {
  //     DataService.findByTitle(searchTitle)
  //       .then((response) => {
  //         setNews(response.data);
  //         console.log(response.data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

  return (
    <div className="list row">
      {/* <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div> */}
      <div className="col-md-6">
        <h4>News List</h4>

        <ul className="list-group">
          {news &&
            news.map((news, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveNews(news, index)}
                key={index}
              >
                {news.title}
              </li>
            ))}
        </ul>
        {/* 
        <button className="m-3 btn btn-sm btn-danger" onClick={removeAllNews}>
          Remove All
        </button> */}
      </div>
      <div className="col-md-6">
        {currentNews ? (
          <div>
            {/* <h4>News</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentNews.title}
            </div>
            <div>
              <label>
                <strong>Content:</strong>
              </label>{" "}
              {currentNews.content}
            </div>
            <div>
              <label>
                <strong>Extract:</strong>
              </label>{" "}
              {currentNews.extract ? "Published" : "Pending"}
            </div> */}

            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{currentNews.title}</Card.Title>
                <Card.Text>{currentNews.content}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Link
              to={"/news/" + currentNews.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a News...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListNews;
