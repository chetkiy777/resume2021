// const skill = document.querySelector("#mySkills")
// const getBtn = document.querySelector("#getBtn")
// const allSkillsDiv = document.querySelector(".allSkills")
// const messageOut = document.querySelector("#message")


// var mySkillArr = [" HTML " , " CSS (BootStrap5, MaterialUI) " , " JavaScript ", " React-Redux (TypeScript)",
//                 " React-Native ", " Node (Express, MongoDB) " ];

// var arrLength = mySkillArr.length

// let message = "press button *get All* to get info"

// let i = 0

// const getItem = () => {
//     skill.innerHTML = skill.innerHTML + mySkillArr[i]
//     i++
//     if (i > arrLength) {
//         skill.innerHTML = ''
//     }
// }
// const startInterval = () => {
//     let timerId = setInterval(() => {
//         getItem()
//         if (i > mySkillArr.length) {
//             clearInterval(timerId)
//             i = 0
//         }
//     }, 1000)
// }

// getBtn.onclick = startInterval

// allSkillsDiv.addEventListener('mouseenter', event => {
//     let target = event.currentTarget
//     let dataToggle = target.getAttribute('data-tooltip')
//     if (!dataToggle) {
//         return
//     }
//     messageOut.textContent = message
// })

// allSkillsDiv.onmouseleave = () => {
//     messageOut.textContent = ""
// }

