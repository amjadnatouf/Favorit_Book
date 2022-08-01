import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./navigation/Navbar";
import LogIn from "./login/LogIn";
import BooksView from "./books/BooksView";
import BookView from "./bookview/BookView";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState({});
  const [book, setBook] = useState({});
  const [id, setId] = useState(0);
  const [drop, setDrop] = useState(false);

  const [users] = useState([
    {
      id: "a",
      name: "Amjad",
      email: "amjad@mail.com",
      password: "BytMig123",
      avtar:
        "https://image.shutterstock.com/z/stock-vector-young-afro-man-avatar-character-male-face-portrait-cartoon-person-vector-illustration-723829372.jpg",
      books: [
        {
          id: 1,
          title: "The Lord of the Rings",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          body: "The best-selling fantasy novel series, The Lord of the Rings, has only grown in popularity since it was released, spawning a veritable armada of films, theatre, music, artwork, video games, and even board games.",
          imgURL:
            "https://cdn.shopify.com/s/files/1/1000/1124/products/proposal-ring-book-safe-lord-of-the-rings-ready-to-ship-490548_1400x.jpg?v=1639700182",
          isRead: false,
        },
        {
          id: 2,
          title: "The Hobbit",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          body: "This relatively brief novel set the stage for J.R.R. Tolkien's later work, The Lord of the Rings. In The Hobbit, or There and Back Again, we follow protagonist Bilbo Baggins and accompany him on a treasure hunt gone wrong.",
          imgURL:
            "https://tolkienlibrary.com/press/images/most-expensive-the-hobbit.jpg",
          isRead: true,
        },
        {
          id: 3,
          title: "The Chamber of Secrets",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          body: "In the second installment of the Harry Potter series, Harry Potter and the Chamber of Secrets, Harry, Ron, and Hermoine investigate the origin of threatening messages written on the walls of Hogwarts and the attacker of several petrified students and staff. Enemies of the heir, beware.",
          imgURL: "https://images.wisegeek.com/harry-potter.jpg",
          isRead: true,
        },
      ],
    },
    {
      id: "b",
      name: "John",
      email: "john@mail.com",
      password: "BytMig123",
      avtar:
        "https://pngset.com/images/cartoon-man-avatar-person-face-head-glasses-transparent-png-186572.png",
      books: [
        {
          id: 1,
          title: "Vue 1",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa vero assumenda, aliquam aut magni ducimus deleniti, dolor accusantium corrupti blanditiis voluptas officia earum perferendis consectetur atque eveniet fuga tenetur perspiciatis.",
          imgURL:
            "https://books.ninja-squad.com/public/images/vue/xebook-cover.png.pagespeed.ic.Fn4QnmoYfd.webp",
          isRead: true,
        },
        {
          id: 2,
          title: "THE ROAD TO REACT",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          body: "Introduction to React From project setup to understanding the fundamentals of JavaScript for React, we will cover everything to get you started in this new environment.",
          imgURL:
            "https://www.roadtoreact.com/static/84193e3d1b0b225941306d53bd24e4ba/d12c9/cover.png",
          isRead: false,
        },
        {
          id: 3,
          title: "JavaScript and jQuery",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          body: "A two-book set for web designers and front-end developers This two-book set combines the titles HTML & CSS: Designing and Building Web Sites and JavaScript & jQuery: Interactive Front-End Development.",
          imgURL:
            "https://globalartsbooks.com/wp-content/uploads/2021/05/9781118907443.jpg",
          isRead: false,
        },
      ],
    },
    {
      id: "c",
      name: "Joakim",
      email: "joakim@mail.com",
      password: "BytMig123",
      avtar:
        "https://image.shutterstock.com/z/stock-vector-young-afro-man-avatar-character-male-face-portrait-cartoon-person-vector-illustration-723829372.jpg",
      books: [
        {
          id: 1,
          title: "The Elements of Pizza by Ken Forkish",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          body: "From the James Beard and IACP award-winning author of “Flour Water Salt Yeast” comes “The Elements of Pizza,” an all-encompassing manual on the world’s most popular dish. This guide breaks down every step of the pizza-making process: choosing the right type of dough from Ken’s dozen or so tried-and-true recipes, shaping your pizza like a pro, selecting the best cheese and toppings for your home setup, and more. His clear, expert instructions will have you making, stretching, and cooking pizzas with the confidence of a professional pizzaiolo in no time at all.",
          imgURL:
            "https://cdn.shopify.com/s/files/1/0205/9582/products/TheElementsofPizza_Hero.jpg?crop=center&height=2048&v=1637954990&width=2048",
          isRead: true,
        },
        {
          id: 2,
          title: "Mastering Pizza by Marc Vetri",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          body: "Mastering Pizza” is a revelatory guide to making delicious pizza at home. Using his trademark precision, award-winning chef Marc Vetri teaches you to work with the oven and equipment you have at home to make incredible pizzas every time. This book is the culmination of years of recipe research in Italy and honing in America, and features a variety of doughs – all with varying hydration levels – that enable home cooks to achieve the same results as their favorite pizza restaurants. Transporting imagery from Italy paired with step-by-step photos to demystify the process will help put you in the pizza mindset, all the better for taking in the expert-level knowledge offered up in this book.",
          imgURL:
            "https://cdn.shopify.com/s/files/1/0408/5655/1588/products/MasteringPizza.jpg?crop=center&height=2048&v=1637960012&width=2048",
          isRead: false,
        },
        {
          id: 3,
          title: "Chicken Masala Biryani",
          description:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
          body: "I cook with spices almost everyday and when it comes to Indian food I never look at a recipe. This Chicken Masala Biryani is one of those that I have probably adjusted the spices a few times already.Biryani is my favorite Indian dish.  I therefore make it my mission to make a delicious one or there’s no point eating it. ",
          imgURL:
            "https://www.tamarindnthyme.com/wp-content/uploads/2019/08/Chicken-Masala-Biryani3.jpg.webp",
          isRead: true,
        },
      ],
    },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("email");
    console.log(token);
    const _user = users.filter((user) => user.email === token);
    console.log(_user);
    if (_user.length) {
      setIsLoggedIn(true);
      setAdmin(..._user);
    }
  }, [users, isLoggedIn]);

  return (
    <div onClick={() => drop && setDrop(false)}>
      {!isLoggedIn ? (
        <LogIn
          setIsLoggedIn={setIsLoggedIn}
          users={users}
          setAdmin={setAdmin}
        />
      ) : (
        <div className="cover">
          <Navbar
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            name={admin.name}
            avtar={admin.avtar}
            email={admin.email}
            drop={drop}
            setDrop={setDrop}
          />
          {!id ? (
            <div className="container">
              <h2 className="main-title"> {admin.name}s bästa böckerna:</h2>
              <div className="grid-container">
                {admin.books.map((el) => (
                  <BooksView
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    description={el.description}
                    imgURL={el.imgURL}
                    isRead={el.isRead}
                    setId={setId}
                    el={el}
                    setBook={setBook}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="container">
              {
                // console.log(book)
                <BookView
                  id={book.id}
                  title={book.title}
                  description={book.description}
                  imgURL={book.imgURL}
                  body={book.body}
                  setId={setId}
                />
              }
            </div>
          )}
        </div>
      )}
      <div className="cover-b"></div>
    </div>
  );
}

export default App;
