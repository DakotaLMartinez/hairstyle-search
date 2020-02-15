// UI state
let UIState = {
  hairStyles: [],
  formState: {
    styleType: 'All',
    occasion: 'All',
    hairType: 'All'
  },
  editingHairstyleId: null
}

// view logic
const renderForm = (formState) => {
  return `
    <form id="searchHairstyles">
      <h3>Search Hairstyles</h3>
      <p>
        <label for="styleType" class="db">Style Type</label>
        <select type="text" name="styleType" id="styleType" value="${formState.styleType}" class="trackInput">
          <option value="All">All</option>
          <option value="Braids">Braids</option>
          <option value="Bob">Bob</option>
        </select>
      </p>
      <p>
        <label for="hairType" class="db">Hair Type</label>
        <select type="text" name="hairType" id="hairType" value="${formState.hairType}" class="trackInput">
          <option value="All">All</option>
          <option value="Straight">Straight</option>
          <option value="Kinky">Kinky</option>
          <option value="Curly">Curly</option>
        </select>
      </p>
      <p>
        <label for="occasion" class="db">Occasion</label>
        <select type="text" name="occasion" id="occasion" value="${formState.occasion}" class="trackInput">
          <option value="All">All</option>
          <option value="Formal">Formal</option>
          <option value="Casual">Casual</option>
          <option value="Sport">Sport</option>
        </select>
      </p>
      <input type="submit" value="Search" />
    </form>
  `
}
const renderList = (hairStyles) => {
  return hairStyles.map(function(hairStyle){
    return `
    <article class="fl w-100 w-50-m  w-25-ns pa2-ns">
      <div class="aspect-ratio aspect-ratio--1x1">
        <img style="background-image:url(${hairStyle.photoUrl});" 
        class="db bg-center cover aspect-ratio--object" />
      </div>
      <a href="#0" class="ph2 ph0-ns pb3 link db">
        <h3 class="f5 f4-ns mb0 black-90">${hairStyle.title}</h3>
        <h3 class="f6 f5 fw4 mt2 black-60">${hairStyle.description}</h3>
      </a>
      <p><button class="edithairStyle" data-id="${hairStyle.id}">Edit hairStyle</button></p>
    </article>
    `
  }).join("")
}

// getting DOM nodes
function getRoot() {
  return document.getElementById('root')
}

function getFormContainer() {
  return document.getElementById('form')
}

// updating the DOM (rerendering)
function updateForm(formState) {
  getFormContainer().innerHTML = renderForm(formState)
  // tracks form State on change of text field inputs
  document.querySelectorAll('.trackInput').forEach(input => {
    input.addEventListener('change', (e) => {
      UIState.formState[e.target.name] = e.target.value
      console.log(UIState.formState)
    })
  })
}

function updateHairstyleList(hairStyles) {
  getRoot().innerHTML = renderList(hairStyles)
  
}

// User Actions/Event Listeners updating UI state and updating the DOM (using pieces of that UI state as arguments)

window.addEventListener('DOMContentLoaded', (event) => {
  
  console.log('DOM fully loaded and parsed');
  // adds form to the DOM
  updateForm(UIState.formState)
  
  fetch("http://localhost:3000/hair_styles")
    .then(res => res.json())
    .then(json => {
      UIState.hairStyles = json
      updateHairstyleList(UIState.hairStyles)
    })

  getFormContainer().addEventListener('submit', (event) => {
    event.preventDefault();
    updateHairstyleList(searchResults(UIState.formState))
  })
});

function searchResults(query) {
  // return the hairstyles that match the query object. This object has
  // styleType, hairType, and occasion attributes
  return UIState.hairStyles
          .filter(hairStyle => {
            return query.styleType === "All" || query.styleType === hairStyle.styleType
          })
          .filter(hairStyle => {
            return query.hairType === "All" || hairStyle.hairTypes.includes(query.hairType)
          })
          .filter(hairStyle => {
            return query.occasion === "All" || query.occasion === hairStyle.occasion
          })
}
