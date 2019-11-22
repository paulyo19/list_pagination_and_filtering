const studentList = document.querySelectorAll('.student-item')
const numstudents = 10
let numPages = 1
let searchBar = document.createElement('div')
let searchInput = document.createElement('input')
let buttonSearch = document.createElement('button')

const showPage = (list, page) => {
   let startIndex = (page * 10) - 10;
   let endIndex = page * 10;
   for (let i = 0; i < studentList.length; i++) {
      if ( i >= (page - 1) * numstudents && i < (page * numstudents)) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
}
showPage(studentList, 1)


const appendPageLinks = () => {
   const pageList = Math.ceil(studentList.length / numstudents);
   let div = document.createElement('div')
   div.className = 'pagination'
   document.querySelector('.page').appendChild(div)
   let ul = document.createElement('ul')
   div.appendChild(ul)
   
   for (let i = 0; i < pageList; i++) {
      let li = document.createElement('li')
      let a = document.createElement('a') 
      a.addEventListener('click', (e) => {
         let aTag = e.target.parentNode.querySelectorAll('a')
         for (let k = 0; k < aTag.length; k++){
            aTag[k].classList.remove('active')
         }
         e.target.classList.add('active')
         showPage(studentList, i + 1)
      })
      a.href = '#'
         a.textContent = i + 1
         li.appendChild(a)
         ul.appendChild(li) 
      if (i == 0){
         a.classList.add('active')
      }
   }
}

appendPageLinks()

const searchButton = () => {
   searchBar.className = 'search'
   searchBar.appendChild(searchInput)
   buttonSearch.textContent = 'Search'
   searchInput.placeholder = 'Browse Students'
   searchBar.appendChild(buttonSearch)
   document.querySelector('.page-header').appendChild(searchBar)
}

searchButton()

const typeSearch = () => {
   let studentName = ''
   let text = searchInput.value.toLowerCase()
   for (let i = 0; i < studentList.length; i++) {
      studentName = studentList[i].querySelector('h3').textContent.toLowerCase()
      if (studentName.indexOf(text) > -1) {
         studentList[i].style.display = ''
      } else {
         studentList[i].style.display = 'none'
      }
   }
}

searchInput.addEventListener('keyup', typeSearch)
buttonSearch.addEventListener('click', typeSearch)