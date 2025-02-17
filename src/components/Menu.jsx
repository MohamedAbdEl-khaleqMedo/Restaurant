import React, { useEffect, useRef, useState } from "react";

const Menu = () => {
  const [show, setShow] = useState(false);
  const itemsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentItemsRef = itemsRef.current; // ✅ تخزين القيمة في متغير محلي

    if (currentItemsRef) {
      observer.observe(currentItemsRef);
    }

    return () => {
      if (currentItemsRef) {
        observer.unobserve(currentItemsRef);
      }
    };
  }, []); // ✅ لا تضف `itemsRef.current` إلى الـ dependencies لأنه لا يسبب إعادة التصيير

  return (
    <div className="menu">
      <h2 className="menu-title">Most Popular Items</h2>
      <div className="categories">
        <span>Popular Breakfast</span>
        <span>Special Lunch</span>
        <span>Lovely Dinner</span>
      </div>
      <div ref={itemsRef} className={`items ${show ? "show" : ""}`}>
        {foodItems.map((item, index) => (
          <div
            key={index}
            className={`item ${show ? "fade-in-right" : ""}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span className="price">${item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const foodItems = [
  { name: "Chicken Burger", image: "https://www.shutterstock.com/image-photo/breaded-sriracha-cod-slaw-sandwich-600nw-2281451167.jpg", description: "Delicious grilled chicken, fresh lettuce, and a special sauce.", price: 12 },
  { name: "Pasta Carbonara", image: "https://media.istockphoto.com/id/1387498803/photo/carbonara-paste-on-a-beige-background.jpg?s=612x612&w=0&k=20&c=18D6kgXW4E50PIf26CgZgmtiKW9WbK77PY6W3POeAhs=", description: "Classic creamy pasta with crispy bacon, parmesan cheese.", price: 18 },
  { name: "Grilled Salmon", image: "https://media.istockphoto.com/id/1433809721/photo/two-salmon-fillets-baked-until-crispy-with-sesame-close-up.jpg?s=612x612&w=0&k=20&c=5rI4OFj8sSCWI2CEIqz47V_jFYhYIlPEF71zrzlmUQ4=", description: "Perfectly grilled salmon with sautéed vegetables.", price: 22 },
  { name: "Vegetarian Pizza", image: "https://media.istockphoto.com/id/1401863376/photo/vegetarian-pizza-with-broccoli-cherry-tomato-pepper-and-mushrooms.jpg?s=612x612&w=0&k=20&c=QvmG8jDZGdGbjXwuaaVwzgTobnIpKERqibJV0ihqfX0=", price: 14 },
  { name: "Chocolate Lava Cake", image: "https://media.istockphoto.com/id/541267186/photo/chocolate-fondant-with-strawberries-and-powdered-sugar.jpg?s=612x612&w=0&k=20&c=6a_-IAUELw0zVMR0vjVtr9UiDg_GAN-S3eowoDGsMhI=", price: 8 },
  { name: "Caesar Salad", image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", description: "Romaine lettuce, Caesar dressing, and parmesan.", price: 10 },
  { name: "Fresh Lemonade", image: "https://media.gettyimages.com/id/1448594799/photo/chinese-food-summer-cool-drinks-juice-and-milk-tea-chinese-take-out-hot-sellers.jpg?s=612x612&w=gi&k=20&c=JbOYWCUBxaZi_CpCsLeEEbOlDYYrl_R3lLI8lsh8ODE=", description: "Refreshing lemonade with mint.", price: 5 },
  { name: "Ice Cream Sundae", image: "https://media.gettyimages.com/id/200565789-001/photo/banana-split-close-up.jpg?s=612x612&w=gi&k=20&c=shulCqZOwkb7v3sY_M67DLbXnRvHLFOWUFAK0ifAlG4=", description: "Vanilla ice cream with chocolate syrup.", price: 6 }
];


export default Menu;

