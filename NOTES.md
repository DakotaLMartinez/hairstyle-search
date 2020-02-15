# Hair Styles 

## Brainstorm
We want to have title of hair style and description. Maybe a photo as well.
Hair Styles have following attributes
  - title
  - description
  - photo
  - style type (braids, up-dos)
  - hair type (straight, kinky, curly, etc.)
  - occasion
  
```
<article class="fl w-100 w-50-m  w-25-ns pa2-ns">
  <div class="aspect-ratio aspect-ratio--1x1">
    <img style="background-image:url(http://t0.gstatic.com/images?q=tbn%3AANd9GcT1kYeXn-g-CgkwhJH8T80Tja2s2OEpg91yx4TVCbP40so3KKQcuD6Ij3dkoMdX34FY8_-ZU1Jz&usqp=CAc);" 
    class="db bg-center cover aspect-ratio--object" />
  </div>
  <a href="#0" class="ph2 ph0-ns pb3 link db">
    <h5 class="f5 f4-ns mt2 mb0 black-90">Box Braids</h5>
    <p class="f6 fw4 mt2 black-60">Long single braid, can be used with extensions</p>
  </a>
  <p><button class="editHairstyle" data-id="">Edit HairStyle</button></p>
</article>
  ```  
  
## UI State
HairStyles
## View Logic (UI Components)
Search Form
HairstyleList
## Rendering Logic (where do we hook into the DOm and render components)
updateHairstyleList
## User Actions (Event Listeners & Handlers and how they affect state)
searching by hair style filters the list