const studentList = document.getElementsByClassName('student-item')
const numPages = 10



const showPage = (list, page) => {
   let startIndex = (page * 10) - 10;
   let endIndex = page * 10;
   for (let i = 0; i < list.length; i++) {
      let li = list[i]
      if (list >= startIndex && list <= endIndex) {
         li.style.display = '';
      } else {
         li.style.display = 'none';
      }
   }
}


const appendPageLinks = (list) => {
   let div = document.createElement('div')
   div.className = 'pagination'
   let ul = document.createElement('ul')
   div.appendChild(ul)
   
   for (let i = 0; i < list.length / 10; i++) {
      let li = document.createElement('LI')
      ul.appendChild(li)
      li.appendChild(a)
      
   }
   
}

console.log(appendPageLinks())