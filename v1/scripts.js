const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://hwtkikrqvnsrrpkjrytv.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3dGtpa3Jxdm5zcnJwa2pyeXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3NTk3ODUsImV4cCI6MTk4NDMzNTc4NX0.l_PGJRds8Lmg17Pn7eqNwFqYWH4rST2gVlTeGCfKTjk",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3dGtpa3Jxdm5zcnJwa2pyeXR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg3NTk3ODUsImV4cCI6MTk4NDMzNTc4NX0.l_PGJRds8Lmg17Pn7eqNwFqYWH4rST2gVlTeGCfKTjk",
      },
    }
  );
  const data = await res.json();
  //console.log(data);
  // const filteredData = data.filter((fact) => fact.category === "technology");

  createFactsList(data);
}

function createFactsList(dataArray) {
  // factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");

  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
    ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }">${fact.category}</span>
  </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));

/*
let votesInteresting = 23;
let votesMindblowing = 5;
const text = "lisbon is the capital of portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindblowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4;
const iscorrect = votesFalse < totalUpvotes;
console.log(iscorrect);

console.log(parseInt("24.533ccc"));
/*
function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else return "Impossible year. year needs to be less or equal ${current year}";
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
console.log(calcFactAge(2037));

//const calcFactAge2 = (year, x) => 2022-year;
const calcFactAge2 = (year, x) =>
  new Date().getFullYear()
    ? new Date().getFullYear() - year
    : "Impossible year. year needs to be less or equal ${new Date().getFullYear()}";
console.log(calcFactAge2(2015));
/*
let votesInteresting = 20;
let votesMindblowing = 20;

if (votesInteresting === votesMindblowing) {
  alert("this fact is equally intresting and mindblowing");
} else if (votesInteresting > votesMindblowing) {
  console.log("something else");
} else if (votesInteresting < votesMindblowing) {
  console.log("mindblowing fact!!!");
}
//falsy value:0,''.null undefined
if (votesMindblowing) {
  console.log("mindblowing fact!!!!!!!");
} else {
  console.log("NoT A Special.....");
}

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > votesFalse
    ? "the fact is true"
    : "might be false, check more surces....";
//alert(message);

const text = "lisbon is the capital of portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str =
  'The current fact is "${text}" . It is ${calcFactAge(2015)} year old.It is probably ${totalUpvotes>votesFalse ? "correct":"not true"}.';
console.log(str); */
/*

const fact = ["lisbon is the capital of portugal", 2015, true];
console.log(fact);
console.log(fact[0]);
console.log(fact.lenght);
console.log(fact[fact.lenght - 1]);

const [createdIn] = fact;
console.log(createdIn);
const newFact = [fact, "society"];
console.log(newfact);

//[2, 4, 6, 8].forEach(function (el) {
//console.log(el);
//});

//[2, 4, 6, 8].map(function (el) {
//return el * 10;
//});

/*const times10 = [2, 4, 6, 8].map((el) => el * 10);
console.log(times10);

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
console.log(allCategories);

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;
  if (age >= 0) return age;
  else return "Impossible year. year needs to be less or equal ${current year}";
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factsAges);
console.log(factAges.join("&"));
*/
