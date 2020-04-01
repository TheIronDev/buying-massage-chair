const starContainer = document.getElementById('starContainer');
const starSwipeText = [
  `The case for the Massage Chair`,
  `Massages = $$$$ + Happy`,
  `Massage Chair = Happy`,
  `Massages = $$$$$ + Massage Chair`,
  `Massage Chair = Massages - $$$$$`,

  `Picking a chair`,

  `Basic comfort of massage chair
Strength of massage
Features
Accessories
Appearance of chair
Price range of massage chairs`,

  `Important criteria`,

  `0 gravity
hand massage
foot massage
Price range (~$700 - $2500)`,

  `Amazon Search Url`,
  `https://www.amazon.com/s?k=massage+chair&rh=p_36%3A70000-200000%2Cp_85%3A2470955011&s=review-rank&dc&qid=1585452780&rnid=2470954011&ref=sr_st_review-rank`,

  `Amazon, $700 - $2000, 4 stars plus = 68 Results`,

  `With 50+ reviews = 7 results`,

  `With foot massage = 5`,

  `Dropped  "ideal massage” - had the lowest review`,

  `Whats left?!`,

  `Kahuna Massage Chair LM-6800S
Kahuna Massage Chair LM-6800
RELAXONCHAIR [MK-II Plus]
Real Relax 2020 Massage Chair`,

  `Remove Real Relax`,

  `Rollers don’t move`,

  `Whats left?!`,

  `Kahuna Massage Chair LM-6800S
Kahuna Massage Chair LM-6800
RELAXONCHAIR [MK-II Plus]`,

  `Remove RelaxonChair`,

  `Doesn’t have stretch capability`,

  `Whats left?!`,

  `Kahuna Massage Chair LM-6800S
Kahuna Massage Chair LM-6800`,

  `Remove Kahuna Massage Chair LM-6800`,

  `Does not have full arm massage`,

  `DONE! WE PICKED IT`,
  `Kahuna Massage Chair LM-6800S`,
  `Kahuna Massage Chair LM-6800S`,
  `Kahuna Massage Chair LM-6800S`,
  `Kahuna Massage Chair LM-6800S`,
];

const colors = [
    'red', 'green', 'blue'
];

const images = [
    'http://image.blingee.com/images16/content/output/000/000/000/5a5/479671204_1295923.gif',
    'https://media3.giphy.com/media/3oKIPfvFCwJDo6UnMA/giphy.gif?cid=ecf05e47174535caffd4ab0fa2fd59197650c540d72e65a0&rid=giphy.gif',
    'https://media.giphy.com/media/8ZZGW8RoVoAi4/giphy.gif',
];

let colorIndex = 0;
let imageIndex = 0;
let contentIndex = 0;

document.body.addEventListener('click', () => {
  {
    if (starContainer.childElementCount > 2) {
      const removeSvg = starContainer.firstElementChild;
      removeSvg.parentElement.removeChild(removeSvg);
    }
    if (starSwipeText[contentIndex] == null) {
      return;
    }
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const text = starSwipeText[contentIndex];
    const background = colors[colorIndex%colors.length];
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    const backgroundRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    backgroundRect.setAttribute('class', 'targetBackground');
    backgroundRect.setAttribute('x', '0');
    backgroundRect.setAttribute('y', '0');
    backgroundRect.setAttribute('height', '100%');
    backgroundRect.setAttribute('width', '100%');
    backgroundRect.setAttribute('fill', background);

    const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
    textElement.setAttribute('x', '50%');
    textElement.setAttribute('class', 'targetText');
    textElement.setAttribute('text-anchor', 'middle');
    textElement.setAttribute('fill', '#fff');
    const textLines = text.split('\n');
    textLines.forEach((line, index) => {
      const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
      tspan.setAttribute('x', '50%');
      tspan.setAttribute('dy', '2em');
      const textNode = document.createTextNode(line);
      tspan.appendChild(textNode);

      if (line.startsWith('http')) {
        // TODO
      }
      textElement.appendChild(tspan);
    });
    textElement.setAttribute('y', `${50 - textLines.length}%`);

    const maskRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    maskRect.setAttribute('mask', 'url(#starMask)');
    maskRect.setAttribute('fill', 'white');
    maskRect.setAttribute('x', '0');
    maskRect.setAttribute('y', '0');
    maskRect.setAttribute('height', '100%');
    maskRect.setAttribute('width', '100%');



    const image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttribute('href', images[imageIndex%images.length]);
    image.setAttribute('x', '50%');
    image.setAttribute('y', '53%');
    image.setAttribute('height', '200px');
    image.setAttribute('width', '200px');

    starContainer.appendChild(svg);
    setTimeout(() => {
      svg.appendChild(backgroundRect);
      svg.appendChild(textElement);
      svg.appendChild(image);
      svg.appendChild(maskRect);
      svg.classList.toggle('starWipe', true);
    }, 60);

    contentIndex++;
    imageIndex++;
    colorIndex++;
  }
});