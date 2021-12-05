const plusSvg =
  '<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1667 0C11.221 0 12.0848 0.815878 12.1612 1.85074L12.1667 2V8.16567L18.3333 8.16667C19.4379 8.16667 20.3333 9.0621 20.3333 10.1667C20.3333 11.221 19.5175 12.0848 18.4826 12.1612L18.3333 12.1667L12.1667 12.1657V18.3333C12.1667 19.4379 11.2712 20.3333 10.1667 20.3333C9.1123 20.3333 8.2485 19.5175 8.17215 18.4826L8.16667 18.3333V12.1657L2 12.1667C0.89543 12.1667 0 11.2712 0 10.1667C0 9.1123 0.815878 8.2485 1.85074 8.17215L2 8.16667L8.16667 8.16567V2C8.16667 0.89543 9.0621 0 10.1667 0Z"fill="#193251"/></svg>'

// Set Date varriables
let today = new Date()
let date =
  'on' +
  ' ' +
  today.getUTCDate() +
  '.' +
  (today.getUTCMonth() + 1) +
  '.' +
  today.getUTCFullYear()

// Buddys varriables
const mainContainer = document.querySelector('main')
const header = document.querySelector('header')

const buddys = [
  {
    members: ['Align', 'Block'],
  },
  {
    members: ['Jennifer', 'Justify'],
  },
  {
    members: ['Peter', 'Pamela'],
  },

]

// Set Date
let todayDate = document.createElement('p')
header.appendChild(todayDate)
todayDate.classList.add('header-label')
todayDate.innerText = date

// Buddys
buddys.forEach((team, index) => {
  const teamBox = document.createElement('section')
  mainContainer.appendChild(teamBox)
  teamBox.classList.add('team-box')
  const memberList = document.createElement('ul')
  teamBox.appendChild(memberList)

  const plusSign = document.createElement('div')
  plusSign.innerHTML = plusSvg
  teamBox.appendChild(plusSign)
  plusSign.classList.add('plusSign-center')

  team.members.forEach((memberName) => {
    const member = document.createElement('li')
    memberList.appendChild(member)
    member.innerHTML = memberName
    memberList.classList.add('members')
  })
})
