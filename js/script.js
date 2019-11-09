

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

}

