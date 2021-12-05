const mainContainer = document.querySelector('main')

const newTeams = [
  {
    name: 'Team One',
    members: ['Align', 'Block', 'Center'],
  },
  {
    name: 'Team Two',
    members: ['Jennifer', 'Justify', 'Jeremy', 'Jerome', 'Justin'],
  },
  {
    name: 'Team Three',
    members: ['Peter', 'Pamela'],
  },
]

newTeams.forEach((team, index) => {
  const teamBox = document.createElement('section')
  mainContainer.appendChild(teamBox)
  teamBox.classList.add('team-box')

  let teamName = document.createElement('h4')
  teamBox.appendChild(teamName)
  teamName.innerText = newTeams[index].name

  const memberList = document.createElement('ul')
  teamBox.appendChild(memberList)
  memberList.classList.add('members')

  team.members.forEach((memberName) => {
    const member = document.createElement('li')
    memberList.appendChild(member)
    member.innerText = memberName
  })
})
