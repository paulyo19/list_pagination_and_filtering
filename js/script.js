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
   const pageList = Math.floor(list.length / numPages);
   let div = document.createElement('div')
   div.className = 'pagination'
   let dotPage = document.querySelector('.page')
   dotPage.appendChild(div)
   let ulStudent = document.createElement('ul')
   div.appendChild(ulStudent)
   
   for (let i = 1; i < pageList / 10; i++) {
      let li = document.createElement('LI')
      ulStudent.appendChild(li)
      let a = document.createElement('a')
      const aStart = document.querySelector('a');
      li.appendChild(a)
      a.href = "#";
      a.textContent = i; 
      aStart.className = 'active';
   }
}