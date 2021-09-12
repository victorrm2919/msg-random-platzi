const messages = [  /* Array message */
    "asjdhasjdh ASD",
    "ANS,MDBHASDBJKASBD JABSDJKHASD",
    "ALKDB AJKSDHJK",
    "HOLA",
    "AKJSDHAJKSHDA AKJDKAJDKJASDKASDLHASJKD",
    "QWIGKJSDFBDA DN",
    "ASD",
    "HVFJHSADFJJJKASDFHJABSFJB JHSCJBSFBJKSFJKAHSDFJKBSFJB"
];

/* Function random message */
const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}
/* Export function */
module.exports = {randomMsg};
