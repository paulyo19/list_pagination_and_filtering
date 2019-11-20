const studentList = document.querySelectorAll('.student-item')
const numPages = 10



const showPage = (list, page) => {
   let startIndex = (page * 10) - 10;
   let endIndex = page * 10;
   for (let i = 0; i < studentList.length; i++) {
      if ( i >= (page - 1) * numPages && i < (page * numPages)) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
}
showPage(studentList, 1)


const appendPageLinks = (list) => {
   const pageList = Math.ceil(studentList.length / numPages);
   let div = document.createElement('div')
   div.className = 'pagination'
   document.querySelector('.page').appendChild(div)
   let ul = document.createElement('ul')
   div.appendChild(ul)
   
   for (let i = 0; i < pageList / 10; i++) {
      let li = document.createElement('li')
      ul.appendChild(li)  
      let a = document.createElement('a')
      li.appendChild(a)
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
   }
}

appendPageLinks()