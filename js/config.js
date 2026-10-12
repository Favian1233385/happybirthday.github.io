const BirthdayConfig = {
  // Global Settings
  birthdayPersonName: "Amiga", // Yadira
  musicUrl: "0628.MP3", // Custom soundtrack file
  voiceNoteUrl: "", // Optional voice note audio file path

  // Chapter 2 - Memory Hunt Settings
  correctGiftIndex: 2, // 0-4 index of correct box
  wrongGiftMessages: [
    "Por ahí no es",
    "Inténtalo de nuevo",
    "Casi, casi",
    "Sigue buscando"
  ],

  // Chapter 3 - Our Story Timeline Settings (Adaptado a tus 2 fotos)
  storyTimeline: [
    {
      title: "✨ Un gran día",
      text: "Hay momentos que se quedan guardados y hacen que cualquier día ordinario se vuelva especial.",
      photo: "story/story_1.jpg"
    },
    {
      title: "🌸 Feliz Cumpleaños",
      text: "Que este nuevo año de vida esté lleno de alegrías, metas cumplidas y muchas sonrisas.",
      photo: "story/story_2.jpg"
    }
  ],

  // Chapter 4 - Birthday Letter Settings (Tu carta de cumpleaños)
  letterText: "Feliz cumpleaños. Quería preparar algo único y especial para ti en este día. Que este pequeño detalle te saque una gran sonrisa y te recuerdes lo valiosa que eres. Espero que hoy la pases increíble, rodeada de mucho cariño y buenos momentos. ¡Muchas felicidades en tu día!",
  letterSignature: "Con mucho aprecio",

  // Chapter 5 - Surprise Box Settings
  floatingMemories: [
    { caption: "Tu sonrisa ✨", photo: "story/story_1.jpg" },
    { caption: "Feliz día 📸", photo: "story/story_2.jpg" }
  ],

  // Chapter 6 - Ending Text Sequence
  endingLines: [
    "Una última cosa...",
    "Gracias por tu amistad y por existir.",
    "¡Feliz Cumpleaños! 🎉",
    "El regalo nunca fue esta página...",
    "Fue la sonrisa que esperaba dibujar en ti hoy."
  ]
};
