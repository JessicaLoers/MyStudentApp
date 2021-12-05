fetch('https://muc-student-companion-api.vercel.app/api/teams')
  .then((result) => result.json())
  .then((data) => {
    const rebuildTeam = data.map((team, index) => {
      return { name: `Team ${index + 1}`, members: team }
    })

    const mainContainer = document.querySelector('main')

    rebuildTeam.forEach((team, index) => {
      const teamBox = document.createElement('section')
      mainContainer.appendChild(teamBox)
      teamBox.classList.add('team-box')

      let teamName = document.createElement('h4')
      teamBox.appendChild(teamName)
      teamName.innerText = team.name

      const memberList = document.createElement('ul')
      teamBox.appendChild(memberList)
      memberList.classList.add('members')

      team.members.forEach((memberName) => {
        const member = document.createElement('li')
        memberList.appendChild(member)
        member.innerText = memberName
      })
    })
  })




