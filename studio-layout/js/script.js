const element = document.querySelector(".header__row_lang");
const choices = new Choices(element,{
  searchEnabled: false,
  itemSelectText:"",
});

function readMore() {
  document.querySelector("#more").classList.toggle("text_active");
}