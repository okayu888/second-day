const quiz = [
  { q: "好きな季節は？", a: ["春", "夏", "冬"], correct: "春" },
  { q: "好きな飲み物は？", a: ["コーヒー", "抹茶ラテ", "紅茶"], correct: "抹茶ラテ" },
  { q: "好きな動物は？", a: ["犬", "猫", "うさぎ"], correct: "猫" }
];

let index = 0;
let score = 0;

function showQuiz() {
  const q = quiz[index];
  document.getElementById("question").textContent = q.q;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  q.a.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => check(answer);
    answersDiv.appendChild(btn);
  });
}

function check(answer) {
  if (answer === quiz[index].correct) {
    alert("正解！");
    score++;
  } else {
    alert("残念...");
  }
  index++;
  if (index < quiz.length) {
    showQuiz();
  } else {
    document.getElementById("result").textContent =
      `あなたの得点は ${score} / ${quiz.length} 点です。`;
  }
}

showQuiz();
