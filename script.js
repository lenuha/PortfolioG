const mainContentTitle = document.querySelector(".main-content__title");
const wrapper = document.querySelector(".wrapper");
const mainContentDescript = document.querySelector(".main-content__descript");
const muyJob = document.querySelector(".muy_job");
const blockImage = document.querySelector(".block-image");
const mainHeader = document.querySelector(".main-header");
const result = document.querySelector(".result");

mainContentTitle.addEventListener("mouseover", () => {
    result.innerHTML = "Привет!"});
    
wrapper.addEventListener("mouseout", () => {
    result.innerHTML = "Пока!"});

mainContentDescript.addEventListener("mouseover", () => {
    result.innerHTML = ""});
 
muyJob.addEventListener("mouseover", () => {
    result.innerHTML = ""});

blockImage.addEventListener("mouseover", () => {
    result.innerHTML = ""});

mainHeader.addEventListener("mouseover", () => {
    result.innerHTML = ""});