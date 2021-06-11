//items
const menu = [
  {
    id: 1,
    title: "Kimchi",
    category: "side-dish",
    price: 4 ,
    img: "./images/kim-chi.jpeg",
    desc: `While there are many different kinds of kimchi, the most common version is made with napa cabbage that is preserved and lightly fermented in bright red chili flakes. Love kimchi and you’re on your way to being a Korean food connoisseur!`,
  },
  {
    id: 2,
    title: "Smagyeopsal",
    category: "pork",
    price: 8,
    img: "./images/samgyupsal.jpeg",
    desc: `Fatty slices of pork belly grilled before your nose is a South Korean foodie favorite. A few slabs of this ultra-tasty pork along with garnishes of lettuce leaves, garlic and chili paste, and you’ve got a flavor to cherish.`,
  },
  {
    id: 3,
    title: "Pork Bulgogi",
    category: "pork",
    price: 7,
    img: "./images/Pork-Bulgogi.jpeg",
    desc: `While it’s normally made from beef, bulgogi can also be made with thin strips of pork or chicken.

    Before the meat is grilled, it’s marinated in sweet soy sauce with lots of garlic and sesame oil.`,
  },
  {
    id: 4,
    title: "Hangover Stew",
    category: "stew",
    price: 5,
    img: "./images/hangover-stew.jpeg",
    desc: `The broth was rich and spicy, flavored with tender chunks or fatty pork and Korean chili paste.
    Known to cure hangovers, after eating this masterpiece of Korean flavor. `,
  },
  {
    id: 5,
    title: "Soft Tufu Stew",
    category: "stew",
    price: 5,
    img: "./images/soft-tufu-stew.jpeg",
    desc: `A flaming hot pot of Sundubu Jjigae is a flavorful Korean dish. Made with super soft tofu, a few bits of seafood, addictive kimchi soup, and an egg thrown on top, there’s not much else as comforting on a cold rainy day. `,
  },
  {
    id: 6,
    title: "Kimchi Stew",
    category: "stew",
    price: 4,
    img: "./images/kimchi-stew.jpeg",
    desc: `Napa cabbage kimchi is boiled with chunks of fatty pork and a few other seasonings and ingredients and then brewed into a stew that boasts intense flavors and will have your belly craving for more!`,
  },
  {
    id: 7,
    title: "Spicy Stir Fried Octopus",
    category: "sea-food",
    price: 9,
    img: "./images/spicy-stir-fried-octopus.jpeg",
    desc: `Koreans have a love affair with octopus. While I wasn’t able to try the famous live squirming octopus tentacles while in South Korea, I was able to get a taste of chopped octopus stir fried with a few assorted vegetables in red chili paste.`,
  },
  {
    id: 8,
    title: "Korean Ox Bone Soup",
    category: "soup",
    price: 6,
    img: "./images/korean-ox-bone-soup.jpeg",
    desc: `Ox bones simmered on low heat for hours and hours is the highlight of Korean seolleongtang. The dish is served plain, a few light noodles, slices of beef and green onions.`,
  },
  {
    id: 9,
    title: "Bibimbap",
    category: "rice",
    price: 4,
    img: "./images/korean-mixed-rice.jpeg",
    desc: `The dish consists of rice on the bottom, a few different kinds of sauteed vegetables, an egg, and toasted seaweed flakes and sesame seeds on top. If it’s not salty enough, you can normally add more gochujang chili paste to make it tastier.`,
  },
  {
    id: 10,
    title: "Mandu",
    category: "side-dish",
    price: 3,
    img: "./images/steamed-mandu-dumplings.jpeg",
    desc: `Similar to jiaozi in China or gyoza in Japan, Korean mandu dumplings are noodle like wrappers stuffed with a variety of different ingredients. Pork, onions, cabbage, carrots, and mung bean noodles are all common ingredients within these pillows of delicious goodness.`,
  },
  {
    id: 11,
    title: "Noodles in Ice Soup",
    category: "noodles",
    price: 5,
    img: "./images/Noodles-in-ice-soup.jpeg",
    desc: `These buckwheat noodles are originally from Pyongyang in North Korea, but they are widely available in South Korea as well. I loved the gummy texture of the noodles and the sesame seed essence in the soup.`,
  },
  {
    id: 12,
    title: "Kimchi Fried Rice",
    category: "rice",
    price: 4,
    img: "./images/kimchi-fried-rice.jpeg",
    desc: `Take South Koreas most iconic vegetable garnish (kimchi), stir fry it with a few chunks of hot dog or luncheon meat and rice, cover it with a fried egg and sprinkle it with toasted seaweed and sesame seeds and you’ve got a dish that no one could dislike!`,
  },
  {
    id: 13,
    title: "Fried Sweet Potato Noodles",
    category: "side-dish",
    price: 3,
    img: "./images/fried-sweet-potato-noodles.jpeg",
    desc: `Fried in sesame oil and garnished with toasted sesame seeds, japchae has a mouthwatering fragrance that a taste you’ll love.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container')


//load items
window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(menu);
  displayMenuButtons();
});



function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
  <img src=${item.img} class="photo" alt=${item.title}>
  <div class="item-info">
    <header>
      <h4>${item.title}</h4>
      <h4 class="price">$${item.price}</h4>
    </header>
    <p class="item-text">
      ${item.desc}
    </p>
  </div>
</article>`
  });
  displayMenu = displayMenu.join('');
  //console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(function(values, item){
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ['all']);
  const categoryBtns = categories.map(function(category){
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  })
  .join("");
  container.innerHTML = categoryBtns;

  const filterBtns = container.querySelectorAll('.filter-btn')

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        //console.log(menuItem.category)
        if (menuItem.category === category) {
          return menuItem;
        };
      });
      if (category === "all") {
        displayMenuItems(menu)
      } else {
        displayMenuItems(menuCategory);
      };
    });
  });
};