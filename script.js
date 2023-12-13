const table = document.querySelector("table")




fetch('https://party-wedding.glitch.me/v1/wedding')
  .then(res => res.json())
  .then(data => {

    data.forEach(person => {

        const tableRow = table.insertRow(-1)
    
        var c1 = tableRow.insertCell(0)
        var c2 = tableRow.insertCell(1)
        var c3 = tableRow.insertCell(2)
    
        c1.innerText = person.name
        c2.innerText = person.plusOne ? "+" : "-"
        c3.innerText = person.attending ? "+" : "-"
    })

    console.log(data)
  })
  .catch(e => console.log(e.message))

