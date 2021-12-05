// const stars = document.querySelectorAll('.rating-star svg')

// stars.forEach((clickedStar, clickedIndex) => {
//   clickedStar.addEventListener('click', () => {
//     stars.forEach((star, starIndex) => {
//       if (starIndex <= clickedIndex) {
//         star.classList.add('active')
//       } /* (starIndex > clickedIndex)*/ else {
//         star.classList.remove('active')
//       }
//     })
//   })
// })

// const square = document.querySelectorAll('.rating-square svg')

// square.forEach((clickedSquare, clickedIndex) => {
//   clickedSquare.addEventListener('click', () => {
//     square.forEach((square, squareIndex) => {
//       if (squareIndex <= clickedIndex) {
//         square.classList.add('active')
//       } /* (squareIndex > clickedIndex)*/ else {
//         square.classList.remove('active')
//       }
//     })
//   })
// })

//---- dont touch !!

const starsAPI =
  '<svg width="1em" height="24" viewBox="0 0 25 24" fill=""xmlns="http://www.w3.org/2000/svg"><path d="M8.23458 7.2288L0.825543 8.30177L0.71598 8.32379C0.00767595 8.50741 -0.252463 9.41029 0.291856 9.93924L5.65288 15.1498L4.38762 22.5059L4.37507 22.6116C4.32751 23.3425 5.11049 23.8714 5.78483 23.5179L12.4119 20.0448L19.039 23.5179L19.136 23.5625C19.8185 23.8334 20.565 23.2545 20.4362 22.5059L19.17 15.1498L24.532 9.93924L24.6076 9.85723C25.0724 9.29362 24.7505 8.41074 23.9983 8.30177L16.5883 7.2288L13.2754 0.535137C12.9222 -0.178379 11.9016 -0.178379 11.5484 0.535137L8.23458 7.2288Z"/></svg>'

const compAPI =
  '<svg width="22" height="22" viewBox="0 0 22 22" fill=""xmlns="http://www.w3.org/2000/svg"><rect y="22" width="22" height="22" rx="4" transform="rotate(-90 0 22)"/></svg>'

const journalEntry = document.querySelector('.journal-entry')

fetch('https://muc-student-companion-api.vercel.app/api/journals')
  .then((result) => result.json())
  .then((data) => {
    const journal = data

    journal.forEach((day, index) => {
      entryDate (day, index)
      createStars(day, index)
      createComp(day, index)
      createEntry(day,index)
      
    })
  })


function entryDate (day, index) {
  const entryDate = document.createElement('div')
  journalEntry.appendChild(entryDate)
  const labelDate = document.createElement('h2')
  labelDate.innerText = 'TODAY'
  entryDate.append(labelDate)

}  

function createEntry(day, index) {

  const entry = document.createElement('div')
  entry.classList.add('rating-entry')
  journalEntry.appendChild(entry)

  const labelMotto = document.createElement('h3')
  const contentMotto = document.createElement('p')
  labelMotto.innerText = 'Motto:'
  contentMotto.innerText = `"${day.motto}"`
  entry.append(labelMotto, contentMotto)

  const labelNote = document.createElement('h3')
  const contentNote = document.createElement('p')
  labelNote.innerText = 'Note:'
  contentNote.innerText = day.notes
  entry.append(labelNote, contentNote)
}

function createStars(day, index) {

  const starBox = document.createElement('div')
  const starLabel = document.createElement('h3')
  starLabel.innerHTML= "Rating:"
  starBox.appendChild(starLabel)

  const starRating = day.rating
 // console.log(starRating)
  // Zusammenbau der Sterne gemäß API Eintrags day.rating
  for (let index = 0; index < 5; index++) {
    const starsSign = document.createElement('svg')

    if (index < starRating) {
      starsSign.classList.add('activeStar')
    }
    starsSign.classList.add('rating-stars')
    starsSign.innerHTML = starsAPI
    journalEntry.appendChild(starBox)
    starBox.appendChild(starsSign)
  }

}

function createComp(day, index) {

  const compRating = day.comprehension
  const compBox = document.createElement('div')
  const compLabel = document.createElement('h3')
  compLabel.innerHTML= "Comprehension:"
  compBox.appendChild(compLabel)

  // Zusammenbau der suqres gemäß API Eintrags day.comprehension
  for (let index = 0; index < 10; index++) {
    
    const compSign = document.createElement('svg')

    if (index < compRating) {
      compSign.classList.add('activeStar')
    
    }
    compSign.classList.add('rating-stars')
    compSign.innerHTML = compAPI
    journalEntry.appendChild(compBox)
    compBox.appendChild(compSign)
  }
}

const stars = document.querySelectorAll('.rating-star svg')
const form = document.querySelector('form')


function starDust(){

stars.forEach((clickedStar, clickedIndex) => {

  clickedStar.addEventListener('click', () => {
    stars.forEach((star, starIndex) => {
      if (starIndex <= clickedIndex) {
        star.classList.add('active')
      } else {
        star.classList.remove('active')
      }
    })
    const starRating = clickedIndex + 1
    return starRating
  })
})

}

starDust()


form.addEventListener('submit', (event) => {
  event.preventDefault()

  const inputValueMotto = form.motto.value
  const inputValueNotes = form.notes.value
  const inputValueRating = starRating
  const inputValueComp = 3
  const newEntry = { motto: inputValueMotto, notes: inputValueNotes, rating: inputValueRating, comprehension: inputValueComp  }
  
  form.reset()

 console.log(newEntry, 'das hier ist das erste log')

 
      fetch("https://muc-student-companion-api.vercel.app/api/journals",
     {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry)
       })
        .then((res) => res.json())
        .then((newEntry) => console.log(newEntry, '2 log'));

})



